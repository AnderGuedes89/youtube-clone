import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './Home';

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#f44336'
    },
    secondary: {
      main: '#065FD4'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
