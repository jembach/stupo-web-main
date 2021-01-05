import { createMuiTheme } from '@material-ui/core/styles';
import { deDE } from '@material-ui/core/locale';

// Create a theme instance.
const theme = createMuiTheme(
  { palette: { type: 'dark', primary: { main: 'YOUR_PRIMARY_COLOR' } } },
  deDE
);

export default theme;
