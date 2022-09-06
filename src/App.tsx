import './App.css';
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Router } from './router/router';
import { BrowserRouter } from 'react-router-dom';
import { brown, cyan, deepPurple, green, orange, red } from '@mui/material/colors';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: brown[500]
      },
      background: {
        default: '#efebe9',
      },
      secondary: deepPurple,
      error: red,
      warning: orange,
      info: cyan,
      success: green
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
