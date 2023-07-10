import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import useSWR from 'swr';
import fetchUserData from './lib/fetch-data';
import type { FetchResponse } from './types/fetch';
import UserDisplay from './components/UserDisplay/UserDisplay';

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
      {data === undefined ? <p>loading...</p> : null}
      {data ? (
        <UserDisplay
          name={data.name}
          login={data.login}
          bio={data.bio}
          created_at={data.created_at}
          avatar_url={data.avatar_url}
          public_repos={data.public_repos}
          followers={data.followers}
          following={data.following}
          location={data.location}
          twitter_username={data.twitter_username}
          blog={data.blog}
          company={data.company}
        />
      ) : null}
    </main>
  );
}

export default App;
