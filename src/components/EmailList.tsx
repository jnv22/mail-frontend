/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useReducer, useEffect, useState } from "react";
import Moment from "moment";
import { v4 as uuidv4 } from "uuid";

import { Grid, Flex, Text, Badge, Button } from "theme-ui";
import Checkbox from "./Checkbox";

type Messages = {
  id: string;
  subject: string;
  sender: string;
  body: string;
  tags: string[];
  date: string;
};

export interface EmailListProps {
  data: {
    messages: Messages[];
  };
}

const EmailList: React.FC<EmailListProps> = ({ data: { messages } }) => {
  interface State {
    [key: string]: boolean;
  }

  interface Action {
    payload: string;
    type: string;
  }

  const checkedItemsReducer = (state: State, action: Action) => {
    switch (action.type) {
      case "toggle":
        const currentCheckedState = state[action.payload];
        return { ...state, [action.payload]: !currentCheckedState };
      case "create":
        return { ...state, [action.payload]: false };
      // TODO:  Support ability to check/uncheck all items
      case "checkAll":
        return { ...state };
      case "uncheckAll":
        return { ...state };
      default:
        return { ...state };
    }
  };

  const [emailData, setEmailData] = useState<Messages[] | null>(null);

  const [checkedItems, dispatchSetCheckedItems] = useReducer(
    checkedItemsReducer,
    {}
  );

  useEffect(() => {
    setEmailData(messages);
  }, [messages]);

  useEffect(() => {
    if (emailData) {
      emailData.forEach(({ id }) =>
        dispatchSetCheckedItems({ type: "create", payload: id })
      );
    }
  }, [emailData]);

  return (
    <div>
      <Button
        onClick={() => {
          let prefilteredData = emailData;
          for (const checkedItem in checkedItems) {
            if (checkedItems[checkedItem] && prefilteredData) {
              prefilteredData = prefilteredData.filter(
                ({ id }) => checkedItem !== id
              );
            }
          }
          setEmailData(prefilteredData);
        }}
        sx={{
          width: "10%",
        }}
      >
        Delete
      </Button>
      <ul
        sx={{
          padding: 0,
        }}
      >
        {emailData &&
          emailData.map(({ id, subject, sender, body, tags, date }) => (
            <li
              key={id}
              sx={{
                boxShadow: "inset 0 -1px 0 0 rgba(100,121,143,0.122)",
                listStyle: "none",
              }}
            >
              <Flex
                sx={{
                  alignItems: "center",
                }}
              >
                <div
                  sx={{
                    flex: 1,
                  }}
                >
                  <Checkbox
                    checked={checkedItems[id]}
                    onChange={() =>
                      dispatchSetCheckedItems({ type: "toggle", payload: id })
                    }
                  />
                </div>
                <Grid
                  columns={[1, 4]}
                  sx={{
                    flex: ["1 1 370px", "1 1 590px"],
                    justifyItems: "left",
                  }}
                >
                  <Text
                    variant="list.new"
                    sx={{
                      wordBreak: "break-word",
                    }}
                  >
                    {sender}
                  </Text>
                  <Text variant="list.new">{subject}</Text>
                  <Text
                    variant="list.new"
                    dangerouslySetInnerHTML={{
                      __html: body.replace("</p><p>", ""),
                    }}
                    sx={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      "& > p": {
                        margin: "1px",
                      },
                    }}
                  ></Text>
                  <div
                    sx={{
                      flex: 1,
                    }}
                  >
                    {tags.map((tag) => {
                      return (
                        <Badge
                          mr={0}
                          bg={`${tag.toLowerCase()}`}
                          key={uuidv4()}
                        >
                          {tag}
                        </Badge>
                      );
                    })}
                  </div>
                </Grid>
                <Text
                  variant="list.new"
                  sx={{
                    flex: 1,
                  }}
                  mr={0}
                >
                  {Moment(date).format("MMM D")}
                </Text>
              </Flex>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EmailList;
