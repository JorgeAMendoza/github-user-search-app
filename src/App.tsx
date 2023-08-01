import { useState } from 'react';
import useSWR from 'swr';
import SearchBar from './components/SearchBar/SearchBar';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import UserDisplay from './components/UserDisplay/UserDisplay';
import fetchUserData from './lib/fetch-data';
import type { FetchResponse } from './types/fetch';
import styled from './app.module.css';

function App() {
  const [user, setUser] = useState('octocat');
  const { data, error, isLoading } = useSWR<FetchResponse, Error>(
    user,
    fetchUserData,
    {
      keepPreviousData: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      errorRetryCount: 0,
    }
  );

  return (
    <main className={styled.container}>
      <div className={styled.header}>
        <h1>devfinder</h1>
        <ThemeSwitch />
      </div>

      <SearchBar setUsername={setUser} loading={isLoading} error={error} />
      {data === undefined ? <p>loading...</p> : null}
      {data ? <UserDisplay userInfo={data} /> : null}
    </main>
  );
}

export default App;
