import { useState } from 'react';
import searchIcon from '@/src/assets/icon-search.svg';
import style from './search-bar.module.css';

interface SearchBarProps {
  setUsername: React.Dispatch<string>;
  loading: boolean;
  error: Error | undefined;
}

const SearchBar = ({ setUsername, loading, error }: SearchBarProps) => {
  const [input, setInput] = useState('');

  return (
    <form
      className={style.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
        setUsername(input);
      }}
    >
      {loading ? (
        <div className={style.loadingSpinner}></div>
      ) : (
        <div className={style.searchIcon}>
          <img src={searchIcon} alt="" />
        </div>
      )}
      <label
        htmlFor="userSearch"
        aria-label="type in username to look for their profile on GitHub"
        data-testid="userSearchInput"
      >
        <input
          id="userSearch"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search GitHub username..."
        />
      </label>

      {error ? (
        <p data-testid="errorMessage" className={style.errorMessage}>
          {error.message}
        </p>
      ) : null}

      <button type="submit" data-testid="userSearchButton">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
