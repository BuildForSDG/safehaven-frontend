import { withStyles } from '@material-ui/core';
import Typo from '@material-ui/core/Typography';

const Typography = withStyles(() => ({
  root: {
    fontFamily: 'Poppins, sans-serif'
  }
}))(Typo);

export default Typography;
