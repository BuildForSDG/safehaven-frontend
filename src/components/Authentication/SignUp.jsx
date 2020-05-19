/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Modal from '@material-ui/core/Modal';
import { signUp, clearError, loading } from '../../redux/actions/authAction';
import AuthLayout from './AuthLayout';
import styles from './auth.scss';
import smallLogo from '../../assets/images/smallLogo.svg';
import sent from '../../assets/images/sent.svg';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    showPassword: false
  });
  const error = useSelector(({ auth }) => {
    return auth.error.msg;
  });

  const success = useSelector(({ auth }) => auth.success.status === 'success');

  const isLoading = useSelector(({ auth }) => auth.loading);

  const handleInputChange = (e) => {
    dispatch(clearError());
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loading());
    dispatch(signUp({...state, conditions: 'none'}));
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setState({ ...state, success: false });
    history.push('/');
  };

  return (
    <AuthLayout>
      <Modal
        open={success}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={styles.Success}>
          <img src={smallLogo} alt="logo" />
          <img className={styles.Sent} src={sent} alt="email sent" />
          <p className={styles.Big}>Thank you for signing up!</p>
          <p>
            We have sent you an email, verify your email to gain access to our
            services.
          </p>
        </div>
      </Modal>
      <form onSubmit={handleSubmit} method="post">
        {error && <div className={styles.Error}>{error}</div>}
        <TextField
          label="First name"
          className={`${styles.InputField} ${styles.Small}`}
          onChange={handleInputChange}
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
          required
          variant="outlined"
          name="email"
          type="email"
        />
        <TextField
          label="Phone Number"
          className={`${styles.InputField} ${styles.Small}`}
          onChange={handleInputChange}
          variant="outlined"
          name="phone"
        />

        <TextField
          label="Password"
          className={`${styles.InputField} ${styles.Wide}`}
          onChange={handleInputChange}
          required
          type={state.showPassword ? 'text' : 'password'}
          variant="outlined"
          name="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          inputProps={{
            minLength: 8
          }}
        />

        <div className={styles.ButtonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            SignUp
          </Button>
        </div>

        <p>OR</p>

        <div className={styles.ButtonContainer}>
          <Button
            type="submit"
            variant="contained"
            className={styles.FB}
            startIcon={<FacebookIcon />}
          >
            connect with facebook
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
