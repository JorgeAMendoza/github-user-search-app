import styled from 'styled-components';

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.primaryButton.background};
  color: ${({ theme }) => theme.primaryButton.color};
  padding: 1.3em 1.5em;
  border: transparent;
  outline: none;
  border-radius: 10px;

  &:hover {
    opacity: 0.6;
  }
`;
