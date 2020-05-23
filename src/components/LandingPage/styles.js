import { makeStyles } from '@material-ui/core/styles';

const rootStyle = {
  backgroundColor: '#00bf00',
  borderRadius: 4,
  color: 'white',
  width: '100%',
  fontSize: '2.8rem',
  textTransform: 'capitalize',

  '&:hover': {
    backgroundColor: '#00bf00',
    opacity: 0.9
  },

  '@media (max-width: 768px)': {
    fontSize: '1.3em'
  },

  '@media (max-width: 632px)': {
    fontSize: '.8em'
  }
};

const useButtonStyles = makeStyles(() => ({
  defaultButton: {
    ...rootStyle
  },

  outlinedButton: {
    ...rootStyle,
    backgroundColor: 'transparent',
    color: '#00bf00',
    border: '1px solid #00bf00',
    fontSize: '1.8rem',
    fontWeight: 400,
    borderRadius: 2,

    '&:hover': {
      backgroundColor: 'transparent'
    },

    '@media (max-width: 768px)': {
      fontSize: '1em'
    },

    '@media (max-width: 632px)': {
      fontSize: '.8em'
    }
  }
}));

export default useButtonStyles;
