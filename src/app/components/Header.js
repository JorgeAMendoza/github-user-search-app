import { Container } from './styles/styled-utils/Container.styled';
import { StyledHeader } from './styles/Header.styled';
import { ThemeToggle } from './styles/ThemeToggle.styled';
import { MoonIcon } from './IconComponents/MoonIcon';
import { SunIcon } from './IconComponents/SunIcon';

export const Header = ({ themeToggle, themeName }) => {
  return (
    <Container>
      <StyledHeader>
        <h1>devfinder</h1>
        <ThemeToggle onClick={themeToggle}>
          {themeName === 'light' ? 'Dark' : 'Light '}
          {themeName === 'light' ? <MoonIcon /> : <SunIcon />}
        </ThemeToggle>
      </StyledHeader>
    </Container>
  );
};
