import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import useSWR from 'swr';
import fetchUserData from './lib/fetch-data';
import type { FetchResponse } from './types/fetch';

function App() {
  const [user, setUser] = useState('octocat');
  const { data, error, isLoading } = useSWR<FetchResponse, Error>(
    user,
    fetchUserData,
    {
      keepPreviousData: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <main>
      <h1>GitHub User Search App</h1>
      <SearchBar setUsername={setUser} loading={isLoading} error={error} />
    </main>
  );
}

export default App;
