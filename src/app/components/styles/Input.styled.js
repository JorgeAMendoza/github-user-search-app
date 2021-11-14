import styled from 'styled-components';

export const StyledInput = styled.label`
  display: flex;

  & > * {
    margin-left: 0.7rem;
  }

  input {
    font-size: 1.3rem;
    width: 25ch;
    border: none;
    background-color: ${({ theme }) => theme.searchBar};
    outline: none;
    margin-left: 1rem;

    &,
    &::placeholder {
      color: ${({ theme }) => theme.searchText};
    }
  }
`;
