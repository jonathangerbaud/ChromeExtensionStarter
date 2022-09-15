// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { extendTheme, ThemeProvider, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from 'react';
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
      extendTheme({
        initialColorMode: mode,
        useSystemColorMode: false,
      }),
    [mode],
  );

  return (
    <ChakraProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ColorModeScript initialColorMode={theme["config"]["initialColorMode"]} />
          <Content />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ChakraProvider>
  );
}

export default App;
