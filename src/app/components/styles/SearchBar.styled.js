import styled from 'styled-components';

export const SearchBar = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 6.9rem;
  border-radius: 15px;
  padding: 0 .5em;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.searchBar};
`;
