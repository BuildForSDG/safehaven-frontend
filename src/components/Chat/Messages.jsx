import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { array as arrayProp, string } from 'prop-types';
import Message from './Message';
import styles from './chat.scss';

const Messages = ({ messages, userId }) => (
  <ScrollToBottom className={styles.messages}>
    {messages.map((message, i) => (
      <div key={i.toString()}>
        <Message message={message} userId={userId} />
      </div>
    ))}
  </ScrollToBottom>
);

Messages.propTypes = {
  messages: arrayProp.isRequired,
  userId: string.isRequired
};

export default Messages;
