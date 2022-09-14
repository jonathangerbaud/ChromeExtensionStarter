// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { ColorModeContext } from "./ColorModeContext";
import { Content } from "./Content";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from "@mui/material";


function App()
{
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () =>
      {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Content />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
