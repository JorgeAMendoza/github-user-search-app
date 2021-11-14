import { useEffect, useState } from 'react';
import searchIcon from '../../assets/icon-search.svg';
import { DisplayResult } from './DisplayResult';
import getGithubInfo from '../api/get-github-info';
import { Container } from '../components/styles/styled-utils/Container.styled';
import { SearchBar } from './styles/SearchBar.styled';
import { StyledInput } from './styles/Input.styled';
import { SendSearch } from './styles/SendSearch.styled';
import { SubmitButton } from './styles/SubmitButton.styled';

export const GitHubSearch = () => {
  const [search, setSearch] = useState('');
  const [errorText, setErrorText] = useState('');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    searchUser('octocat');
  }, []);

  async function searchUser(username) {
    try {
      const results = await getGithubInfo(username);
      setUserData(Object.assign({}, results));
    } catch (e) {
      setErrorText('No Results');
    }
  }

  return (
    <main>
      <Container>
        <SearchBar
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            if (!search) {
              setErrorText('Invalid Search');
              return;
            }
            setErrorText('');
            searchUser(search);
          }}
        >
          <StyledInput htmlFor="userSearch">
            <img src={searchIcon} alt="Search Icon" />
            <input
              id="userSearch"
              type="text"
              placeholder="Search GitHub username..."
              onChange={(e) => setSearch(e.target.value)}
              onBlur={(e) => setSearch(e.target.value)}
            />
          </StyledInput>

          <SendSearch>
            <p>{errorText}</p>
            <SubmitButton>Search</SubmitButton>
          </SendSearch>
        </SearchBar>

        <DisplayResult data={userData}></DisplayResult>
      </Container>
    </main>
  );
};
