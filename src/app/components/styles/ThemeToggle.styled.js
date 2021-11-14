import styled from 'styled-components';

export const ThemeToggle = styled.button`
  background: none;
  min-width: 10ch;
  display: flex;
  color: ${({ theme }) => theme.toggleButton.color};
  text-transform: uppercase;
  letter-spacing: 3px;
  gap: 1rem;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.toggleButton.hoverColor};

    svg path,
    svg g {
      fill: ${({ theme }) => theme.toggleButton.hoverColor};
    }
  }

  svg path,
  svg g {
    fill: ${({ theme }) => theme.toggleButton.color};
  }
`;
