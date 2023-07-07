import { useState } from 'react';
import searchIcon from '@/src/assets/icon-search.svg';

const SearchBar = () => {
  const [input, setInput] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <img src={searchIcon} alt="" />
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

      {/* only render if error */}
      {/* <p></p> */}

      <button type="button">Search</button>
    </form>
  );
};

export default SearchBar;
