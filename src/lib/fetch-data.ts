import type { FetchResponse } from '@/types/fetch';
import axios from 'axios';

const apiUrl = 'https://api.github.com/users/';

const fetchUserData = async (username: string): Promise<FetchResponse> => {
  const { data } = await axios.get<FetchResponse>(apiUrl + username);
  return data;
};

export default fetchUserData;
