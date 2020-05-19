/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import styles from './auth.scss';
import AuthLayout from './AuthLayout';
import signUp from '../../redux/actions/authAction';


const SignIn = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({});
  const dummyText = useSelector((store) => store.example.exampleText);


  const handleInputChange = (e) => setState({
    ...state,
    [e.currentTarget.name]: e.currentTarget.value
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(signUp(state));
  }

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return(
  <AuthLayout>
    {dummyText}
    <form onSubmit={handleSubmit} method="post">
      <TextField
        label="Email"
        className={`${styles.InputField} ${styles.Wide}`}
        onChange={handleInputChange}
        required
        variant="outlined"
        name="email"
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
          minLength: 8,
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
          ),
        }}
      />
      <div className={styles.ButtonContainer}>
        <Button type="submit" variant="contained" color="primary">
          SignIn
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
)};

export default SignIn;
