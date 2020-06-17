import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SendIcon from '@material-ui/icons/Send';
import io from 'socket.io-client';
import TabPanel from '../Profile/TabPanel';
import ProfileLayout from '../Layout/ProfileLayout';
import styles from './chat.scss';
import Consultants from './Consultants';
import Patients from './Patients';
import { getProfile, clearError } from '../../redux/actions/profileAction';
import Chat from '../../assets/images/chat.svg';
import { setOtherUser, setMessages } from '../../redux/actions/chatAction';
import Messages from './Messages';

// const iourl = 'https://safehaven-backend.herokuapp.com';
const iourl = 'http://localhost:9000';

// eslint-disable-next-line no-unused-vars
let socket;

/**
 * @function ChatPage
 * @param {*} props
 * @returns {HTMLElement} default layout
 */
const ChatPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [connectionID, setconnectionID] = useState();
  const [value, setValue] = useState('one');
  const token = localStorage.getItem('SHtoken');
  const messages = useSelector(({ chat }) => chat.messages);
  const otherPerson = useSelector(({ chat }) => chat.otherUuid);
  const user = useSelector(({ profile }) => {
    if (profile.error || !profile.user) {
      history.push('/login');
    }
    return profile.user;
  });
  const senderName = `${user.firstName} ${user.surName}`;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch(clearError());
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    socket = io(iourl, {
      transportOptions: {
        polling: {
          extraHeaders: {
            authorization: token
          }
        }
      }
    });
  }, [token]);

  useEffect(() => {
    socket.emit('make-connection', { otherUuid: otherPerson }, (error) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    });
  }, [otherPerson]);

  useEffect(() => {
    socket.on('conversation', (data) => {
      if (data.connection) {
        setconnectionID(data.connection.uuid);
        dispatch(setMessages(data.connection.chats, () => setMessage('')));
      }
      if (data.chatReturned) {
        dispatch(
          setMessages([...messages, data.chatReturned], () => setMessage(''))
        );
      }
    });
  }, [messages]);

  const setUser = (useruuid) => {
    if (user.uuid === useruuid) {
      // eslint-disable-next-line no-alert
      alert('choose someone else to chat with');
    } else {
      dispatch(setOtherUser(useruuid));
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit(`${connectionID}-message`, {
        message,
        parentUuid: otherPerson,
        senderName
      });
    }
  };

  return (
    <ProfileLayout>
      <div className={styles.ChatPage}>
        <div className={styles.People}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            <Tab value="one" label="Consultants" />
            <Tab value="two" label="Patients" />
          </Tabs>

          <TabPanel value={value} index="one">
            <Consultants user={user} setOtherUser={setUser} />
          </TabPanel>
          <TabPanel value={value} index="two">
            <Patients setOtherUser={setUser} />
          </TabPanel>
        </div>

        <div className={styles.ChatContainer}>
          {!otherPerson && (
            <div className={styles.NoChat}>
              <img src={Chat} alt="chat" />
              <h4>Click user to chat</h4>
            </div>
          )}
          {otherPerson && (
            <div className={styles.ChatBox}>
              <Messages messages={messages} userId={user.uuid} />
              <div className={styles.TextField}>
                <form action="" onSubmit={sendMessage} method="post">
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
          )}
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ChatPage;
