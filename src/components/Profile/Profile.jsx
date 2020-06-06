import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ForumIcon from '@material-ui/icons/Forum';
import EventIcon from '@material-ui/icons/Event';
import HealingIcon from '@material-ui/icons/Healing';
import styles from './profile.scss';
import EditUser from './EditUser';
import TabPanel from './TabPanel';
import smallLogo from '../../assets/images/smallLogo.png';
import { getProfile } from '../../redux/actions/profileAction';
import { clearError } from '../../redux/actions/authAction';

/**
 * @function DefaultLayout
 * @param {*} props
 * @returns {HTMLElement} default layout
 */
const ProfilePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const {
    firstName,
    surName,
    gender,
    phone,
    email,
    dateOfBirth,
    nationality,
    avatar,
    stateOfOrigin,
    address,
    role
  } = useSelector(({ profile }) => profile.user);
  const image = !avatar
    ? 'https://res.cloudinary.com/aoimageupload/image/upload/v1577798036/Portrait_Placeholder.png'
    : avatar;

  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(clearError());
    dispatch(getProfile());
  }, []);

  useSelector(({ profile }) => {
    if (profile.error || !profile.user) {
      history.push('/login');
    }
  });

  const handleClose = () => {
    history.push('/profile');
  };

  return (
    <div className={styles.ProfileContainer}>
      {pathname === '/profile/edit' && (
        <EditUser
          surName={surName}
          firstName={firstName}
          gender={gender}
          phone={phone}
          email={email}
          dateOfBirth={dateOfBirth}
          nationality={nationality}
          avatar={image}
          stateOfOrigin={stateOfOrigin}
          address={address}
          handleClose={handleClose}
        />
      )}
      <div className={styles.ProfileNav}>
        <ul>
          <li>
            <img src={smallLogo} alt="" />
          </li>
          <li>
            <NavLink activeStyle={{ background: '#007C0C' }} to="/profile">
              <PersonOutlineIcon fontSize="large" /> <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ background: '#007C0C' }} to="/chat">
              <ForumIcon fontSize="large" /> <span>Chat</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <HomeIcon fontSize="large" /> <span>Home</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <main>
        <div className={styles.Details}>
          <div className={styles.Info}>
            <h3>
              {firstName} {surName}
            </h3>
            <img src={image} alt="placeholder" />
            <Button
              type="button"
              variant="contained"
              onClick={() => history.push('/profile/edit')}
            >
              Edit Profile
            </Button>
          </div>
          <div>
            <div className={styles.Detail}>
              <h5>Role</h5>
              {role}
            </div>
            <div className={styles.Detail}>
              <h5>Phone Number</h5>
              <i>+234</i> {phone}
            </div>
            <div className={styles.Detail}>
              <h5>Email</h5>
              <i>{email}</i>
            </div>
            {address && (
              <div className={styles.Detail}>
                <h5>Address</h5>
                {address}
              </div>
            )}
            {gender && (
              <div className={styles.Detail}>
                <h5>Gender</h5>
                {gender}
              </div>
            )}
            {dateOfBirth && (
              <div className={styles.Detail}>
                <h5>DOB</h5>
                {dateOfBirth}
              </div>
            )}
            {stateOfOrigin && nationality && (
              <div className={styles.Detail}>
                <h5>Where From</h5>
                {stateOfOrigin}, {nationality}
              </div>
            )}
          </div>
        </div>
        <div className={styles.Aside}>
          <div className={styles.Actions}>
            <Button variant="contained" startIcon={<EventIcon />}>
              Set Appointment
            </Button>
            <Button variant="contained" startIcon={<HealingIcon />}>
              Take Health Assessment
            </Button>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            <Tab value="one" label="Upcoming Appointments">
              You have no upcoming appointments
            </Tab>
            <Tab value="two" label="Notes">
              You have no notes
            </Tab>
          </Tabs>

          <TabPanel value={value} index="one">
            You have no upcoming appointments
          </TabPanel>
          <TabPanel value={value} index="two">
            You have no notes
          </TabPanel>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
