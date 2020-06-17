import React from 'react';
import { object as objectProp, string } from 'prop-types';
import ReactEmoji from 'react-emoji';
import styles from './chat.scss';

const Message = ({ message, userId }) => {
  let isSentByCurrentUser = false;

  if (message.user_uuid === userId) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={styles.Response}>
      <p className={styles.name}>{message.senderName}</p>
      {ReactEmoji.emojify(message.message)}
    </div>
  ) : (
    <div className={styles.Parent}>
      <p className={styles.name}>{message.senderName}</p>
      {ReactEmoji.emojify(message.message)}
    </div>
  );
};

Message.propTypes = {
  message: objectProp.isRequired,
  userId: string.isRequired
};

export default Message;
