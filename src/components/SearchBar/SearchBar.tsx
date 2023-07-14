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
      onSubmit={(e) => {
        if (input === '') return;
        setUsername(input);

        e.preventDefault();
      }}
    >
      {loading ? (
        <div className={style.loadingSpinner}></div>
      ) : (
        <img src={searchIcon} alt="" />
      )}
      <label
        htmlFor="userSearch"
        aria-label="type in username to look for their profile on GitHub"
      >
        <input
          id="userSearch"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>

      {error ? <p>{error.message}</p> : null}

      <button type="button">Search</button>
    </form>
  );
};

export default SearchBar;
