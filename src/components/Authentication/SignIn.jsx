import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router-dom';
import styles from './auth.scss';
import AuthLayout from './AuthLayout';
import { signIn, clearError, loading } from '../../redux/actions/authAction';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    showPassword: false
  });
  const error = useSelector(({ auth }) => {
    return !auth.error ? '' : auth.error;
  });

  useSelector(({ auth }) => {
    if (auth.signedIn) {
      history.push('/profile');
    }
  });

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
    dispatch(signIn(state));
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <div>
        <form onSubmit={handleSubmit} method="post">
          {error && <div className={styles.Error}>{error}</div>}

          <TextField
            label="Email"
            className={`${styles.InputField} ${styles.Wide}`}
            onChange={handleInputChange}
            required
            variant="outlined"
            name="email"
            type="email"
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
              Login
            </Button>
          </div>

          <p>OR</p>

          <div className={styles.ButtonContainer}>
            <Button
              type="button"
              variant="contained"
              className={styles.FB}
              startIcon={<FacebookIcon />}
            >
              connect with facebook
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
