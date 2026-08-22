import { createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Menu from './components/Menu';
import { getAppTheme } from './theme';

export const WidthContext = createContext();
export const ColorModeContext = createContext({ mode: 'light', toggleMode: () => { } });

const THEME_STORAGE_KEY = 'colorMode';

function getInitialMode() {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function App() {
  const [width, setWidth] = useState(0);
  const [mode, setMode] = useState(getInitialMode);

  // Get window dimensions on resize
  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    updateWindowDimensions();
  }, []);

  const colorMode = useMemo(() => ({
    mode,
    toggleMode: () => {
      setMode((prevMode) => {
        const nextMode = prevMode === 'light' ? 'dark' : 'light';
        window.localStorage.setItem(THEME_STORAGE_KEY, nextMode);
        return nextMode;
      });
    },
  }), [mode]);

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WidthContext.Provider value={width}>
          <Menu />
        </WidthContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
