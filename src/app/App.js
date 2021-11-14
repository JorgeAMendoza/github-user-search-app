import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GitHubSearch } from './components/GitHubSearch';
import { Header } from './components/Header';
import { GlobalStyles } from './components/styles/Global.styled';
import { lightTheme, darkTheme } from './components/styles/styled-utils/theme';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header themeToggle={toggleTheme} themeName={theme}></Header>
        <GitHubSearch></GitHubSearch>
      </ThemeProvider>
    </>
  );
}

export default App;
