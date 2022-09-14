import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import './App.css';
import { ColorModeContext } from "./ColorModeContext";
import { Content } from "./Content";


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
        <Content />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
