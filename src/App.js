import { createContext, useEffect, useState } from 'react';
import Menu from './components/Menu';

export const WidthContext = createContext();

function App() {
  const [width, setWidth] = useState(0);
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
  return (
    <WidthContext.Provider value={width}>
      <Menu />
    </WidthContext.Provider>
  );
}

export default App;
