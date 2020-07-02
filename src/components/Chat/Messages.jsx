import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ScrollToBottom from 'react-scroll-to-bottom';
import { array as arrayProp, string, bool } from 'prop-types';
import Message from './Message';
import styles from './chat.scss';

const Messages = ({ messages, userId, loading }) => {
  return (
    <ScrollToBottom className={styles.messages}>
      {loading && (
        <div className={styles.Loading}>
          <div className={styles.Loader}>
            <CircularProgress />
          </div>
        </div>
      )}
      {messages.map((message, i) => (
        <div key={i.toString()}>
          <Message message={message} userId={userId} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

Messages.propTypes = {
  messages: arrayProp.isRequired,
  userId: string.isRequired,
  loading: bool.isRequired
};

export default Messages;
