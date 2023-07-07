import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import useSWR from 'swr';
import fetchUserData from './lib/fetch-data';

function App() {
  const [user, setUser] = useState('octocat');
  const { data, error, isLoading } = useSWR(user, fetchUserData);

  {
    isLoading ? <p>Loading...</p> : null;
  }
  console.log(data);
  return (
    <main>
      <h1>GitHub User Search App</h1>
      <SearchBar />
    </main>
  );
}

export default App;
