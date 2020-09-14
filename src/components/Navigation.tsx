/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Box, Text, Badge, Button } from "theme-ui";
import { Messages } from "./EmailList";

export interface NavigationProps {
  data: {
    messages: Messages[];
  };
}

const Navigation: React.FC<NavigationProps> = ({ data: { messages } }) => {
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  useEffect(() => {
    if (messages) {
      const allTags: string[] = [];
      messages.forEach(({ tags }) => {
        tags.forEach((tag) => {
          allTags.push(tag);
        });
      });
      const uniqueValues = [...new Set(allTags)];
      setUniqueTags(uniqueValues);
    }
  }, [messages]);

  return (
    <Box p={4} bg="white">
      <ul
        sx={{
          padding: 0,
          margin: 0,
          "& > li": {
            listStyle: "none",
            textAlign: "center",
          },
        }}
      >
        {/* TODO: Make into links */}
        <li>
          <Button variant="primary">Inbox</Button>
        </li>
        <li>
          <Button variant="primary">Trash</Button>
        </li>
        <li
          sx={{
            margin: "0",
          }}
        >
          <Text>Tags:</Text>
          <ul>
            {uniqueTags &&
              uniqueTags.map((tag) => (
                <li key={uuidv4()}>
                  <Badge bg={`${tag.toLowerCase()}`}>{tag}</Badge>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </Box>
  );
};

export default Navigation;
