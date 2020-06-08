import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
import ProfileLayout from '../Layout/ProfileLayout';
import styles from './chat.scss';

/**
 * @function ChatPage
 * @param {*} props
 * @returns {HTMLElement} default layout
 */
const ChatPage = () => {
  const handleInputChange = (e) => {
    console.log(e);

    // dispatch(clearError());
    // setState({
    //   ...state,
    //   [e.currentTarget.name]: e.currentTarget.value
    // });
  };
  return (
    <ProfileLayout>
      <div className={styles.ChatContainer}>
        <div className={styles.ChatBox}>
          <div className={styles.Parent}>
            Hello my name is Dr Bernard and I&apos;ll be your doctor today
          </div>
          <div className={styles.Response}>
            Hello my name is Dr Bisi, thank you for being here
          </div>
          <div className={styles.TextField}>
            <form action="" method="post">
              <TextField
                label="Enter text"
                className={styles.InputField}
                onChange={handleInputChange}
                required
                variant="outlined"
                name="message"
                type="text"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="send"
                        type="submit"
                        variant="contained"
                      >
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ChatPage;
