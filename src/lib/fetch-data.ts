import type { FetchResponse, ErrorResponse } from '@/src/types/fetch';
import axios from 'axios';

const apiUrl = 'https://api.github.com/users/';

const fetchUserData = async (username: string): Promise<FetchResponse> => {
  try {
    const { data } = await axios.get<FetchResponse>(apiUrl + username);
    return data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const response = e.response?.data as ErrorResponse;
      throw new Error(response.message);
    }
    throw new Error('Something went wrong');
  }
};

export default fetchUserData;
