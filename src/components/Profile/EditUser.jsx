/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { func, string, number } from 'prop-types';
import styles from './profile.scss';
import {
  editProfile,
  clearError,
  loading
} from '../../redux/actions/profileAction';

const EditUser = ({
  handleClose,
  firstName,
  surName,
  gender,
  phone,
  email,
  dateOfBirth,
  nationality,
  avatar,
  stateOfOrigin,
  address
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({});
  const user = useSelector(({ profile }) => {
    return profile.user;
  });
  useSelector(({ profile }) => {
    if (profile.edited) {
      history.push('/profile');
    }
  });
  useEffect(() => {
    setState({
      firstName,
      surName,
      phone,
      email,
      avatar,
      gender: gender || '',
      dateOfBirth: dateOfBirth || '',
      nationality: nationality || '',
      stateOfOrigin: stateOfOrigin || '',
      address: address || ''
    });
  }, [user]);
  const image = !state.avatarPreview ? state.avatar : state.avatarPreview;

  const error = useSelector(({ profile }) => {
    return profile.editError;
  });

  const isLoading = useSelector(({ profile }) => profile.loading);

  const handleInputChange = (e) => {
    dispatch(clearError());
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const handleImage = (e) => {
    dispatch(clearError());
    setState({
      ...state,
      avatar: e.target.files,
      avatarPreview: URL.createObjectURL(e.target.files[0])
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loading());
    dispatch(editProfile(state));
  };

  return (
    <div>
      <Modal
        open
        onClose={() => handleClose()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <form
          onSubmit={handleSubmit}
          className={styles.EditForm}
          method="post"
          encType="multipart/form-data"
        >
          <h2>Edit your Profile</h2>
          <div className={styles.Image}>
            <img src={image} alt="placeholder" />
            <Button variant="contained" component="label">
              <span>change Image</span>
              <input
                type="file"
                multiple={false}
                name="avatar"
                onChange={handleImage}
                style={{ display: 'none' }}
              />
            </Button>
          </div>
          {(error && error.msg) && <div className={styles.Error}>{error.msg} in {error.param}</div>}
          {(error && !error.msg) && <div className={styles.Error}>{error}</div>}
          <TextField
            label="First name"
            className={`${styles.InputField} ${styles.Small}`}
            onChange={handleInputChange}
            value={state.firstName}
            required
            variant="outlined"
            name="firstName"
            inputProps={{
              minLength: 2
            }}
          />
          <TextField
            label="Last name"
            className={`${styles.InputField} ${styles.Small}`}
            onChange={handleInputChange}
            value={state.surName}
            required
            variant="outlined"
            name="surName"
            inputProps={{
              minLength: 2
            }}
          />
          <TextField
            label="Email"
            className={`${styles.InputField} ${styles.Small}`}
            onChange={handleInputChange}
            value={state.email}
            required
            variant="outlined"
            name="email"
            type="email"
            disabled
          />
          <TextField
            label="Phone Number"
            value={state.phone}
            className={`${styles.InputField} ${styles.Small}`}
            onChange={handleInputChange}
            variant="outlined"
            name="phone"
            required
          />
          <FormControl
            variant="outlined"
            className={`${styles.InputField} ${styles.Small}`}
          >
            <InputLabel>Gender</InputLabel>
            <Select
              native
              value={state.gender}
              onChange={handleInputChange}
              inputProps={{
                name: 'gender',
                id: 'age-native-simple'
              }}
            >
              <option aria-label="none" value="" />
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            value={state.dateOfBirth}
            onChange={handleInputChange}
            variant="outlined"
            name="dateOfBirth"
            className={`${styles.InputField} ${styles.Small}`}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="State of origin"
            className={`${styles.InputField} ${styles.Small}`}
            onChange={handleInputChange}
            value={state.stateOfOrigin}
            variant="outlined"
            name="stateOfOrigin"
            required
          />
          <TextField
            label="Nationality"
            className={`${styles.InputField} ${styles.Small}`}
            onChange={handleInputChange}
            value={state.nationality}
            variant="outlined"
            name="nationality"
            required
          />
          <TextField
            label="Address"
            className={`${styles.InputField} ${styles.Wide}`}
            onChange={handleInputChange}
            variant="outlined"
            value={state.address}
            name="address"
            required
          />

          <div className={styles.ButtonContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Edit
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

EditUser.propTypes = {
  handleClose: func.isRequired,
  firstName: string.isRequired,
  surName: string.isRequired,
  gender: string,
  phone: number,
  email: string,
  dateOfBirth: string,
  nationality: string,
  avatar: string.isRequired,
  stateOfOrigin: string,
  address: string
};

EditUser.defaultProps = {
  gender: null,
  phone: null,
  email: null,
  dateOfBirth: null,
  nationality: null,
  stateOfOrigin: null,
  address: null
};

export default EditUser;
