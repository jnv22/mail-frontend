/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useReducer, useEffect } from 'react';
import Moment from 'moment';

import { Grid, Flex, Text, Badge } from 'theme-ui'
import Checkbox from './Checkbox';

type Messages = {
  id: string;
  subject: string;
  sender: string;
  body: string;
  tags: string[];
  date: string;
}

export interface EmailListProps {
  data: {
    messages: Messages[];
  }
}

const TAG_COLORS= {
  TRAVEL: 'blue',
  WORK: 'green'
}

const EmailList: React.FC<EmailListProps> = ({ data: {messages} }) => {  
  const checkedItemsReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'toggle':
        const currentCheckedState = state[action.payload];
        return {...state, [action.payload]: !currentCheckedState};
      case 'create':
        return {...state, [action.payload]: false};
      case 'checkAll':
        return {...state};
      case 'uncheckAll':
        return {...state};
      default:
        throw new Error();
    }
  }
  


  const [ checkedItems, dispatchSetCheckedItems ] = useReducer(checkedItemsReducer, {});

  useEffect(() => messages.forEach(({id}) => dispatchSetCheckedItems({type: 'create', payload: id}), [messages]), [messages]);
  
  console.log(checkedItems);
  return (
    <ul
    sx={{
      padding: 0,
    }}
    >
      {
        messages.map(({id, subject, sender, body, tags, date}) => (
          <li 
            key={id}
            sx={{
              boxShadow: 'inset 0 -1px 0 0 rgba(100,121,143,0.122)',
              listStyle: 'none',
            }}
          >
            <Flex>
              <div
                sx={{
                  flex: 1
                }}
              >
                <Checkbox 
                  checked={checkedItems[id]} 
                  onChange={() => dispatchSetCheckedItems({type: 'toggle', payload: id})}
                />
              </div>
              <Grid
                columns={[ 1, 4]}
                sx={{
                  flex: '1 1 560px',
                  justifyItems: 'center'
                }}
              >
              <Text variant="list.new">{sender}</Text>
              <Text variant="list.new">{subject}-</Text>
              <Text 
                variant="list.new" 
                dangerouslySetInnerHTML={{__html: body.replace('</p><p>', '')}}
                sx={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  '& > p': {
                    margin: '1px'
                  }
                }}
              >
              </Text>
              <Text 
                variant="list.new"
                sx={{
                  flex:1
                }}
              >
                {
                  tags.map(tag => {
                    return (
                      const tagColor = TAG_COLORS[tag.toUpperCase()];
                      // <Badge bg={tagColor ? tagColor : 'black' }>{tag}</Badge>
                    ) 
                  })
                }
              </Text>
              </Grid>
              <Text 
                variant="list.new"
                sx={{
                  flex: 1
                }}
              >{Moment(date).format('MMM, D')}</Text>
            </Flex>
          </li>
        ))
      }
    </ul>
  )
}

export default EmailList;