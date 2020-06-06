import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Modal from '@material-ui/core/Modal';
import { signUp, clearError, loading, clearSuccess } from '../../redux/actions/authAction';
import AuthLayout from './AuthLayout';
import styles from './auth.scss';
import smallLogo from '../../assets/images/smallLogo.svg';
import sent from '../../assets/images/sent.svg';

const SignUp = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    showPassword: false,
    idPreview: '',
    certificatePreview: ''
  });
  const error = useSelector(({ auth }) => {
    return auth.error ? auth.error.msg : '';
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
  const handleCertificate = (e) => {
    dispatch(clearError());
    setState({
      ...state,
      certificate: e.target.files,
      certificatePreview: URL.createObjectURL(e.target.files[0])
    });
  };

  const handleIdUpload = (e) => {
    dispatch(clearError());
    setState({
      ...state,
      validId: e.target.files,
      idPreview: URL.createObjectURL(e.target.files[0])
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loading());
    dispatch(signUp({ ...state, conditions: 'none' }, pathname));
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setState({ ...state, success: false });
    dispatch(clearSuccess());
    history.push('/');
  };

  return (
    <AuthLayout>
      <div>
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
        <form
          onSubmit={handleSubmit}
          method="post"
          encType="multipart/form-data"
        >
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

          {pathname === '/provider' && (
            <div className={styles.Optional}>
              <div className={styles.Docs}>
                <span className={styles.Asterisk}>
                  Upload Certificate<i>*</i>
                </span>
                <Button
                  className={styles.Upload}
                  variant="contained"
                  component="label"
                  style={{
                    backgroundImage: `url(${state.certificatePreview})`
                  }}
                  id="certButton"
                >
                  {!state.certificatePreview && <span>Upload File</span>}
                  {state.certificatePreview && <span>change File</span>}
                  <input
                    type="file"
                    id="certInput"
                    multiple="false"
                    name="validCertificate"
                    onChange={handleCertificate}
                    required
                    style={{ display: 'none' }}
                  />
                </Button>
              </div>
              <div className={styles.Docs}>
                <span className={styles.Asterisk}>
                  Upload Valid ID<i>*</i>
                </span>
                <Button
                  id="idButton"
                  className={styles.Upload}
                  variant="contained"
                  component="label"
                  style={{ backgroundImage: `url(${state.idPreview})` }}
                >
                  {!state.idPreview && <span>Upload File</span>}
                  {state.idPreview && <span>change File</span>}
                  <input
                  id="idInput"
                    type="file"
                    multiple="false"
                    name="validCard"
                    onChange={handleIdUpload}
                    required
                    style={{ display: 'none' }}
                  />
                </Button>
              </div>
            </div>
          )}

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

export default SignUp;