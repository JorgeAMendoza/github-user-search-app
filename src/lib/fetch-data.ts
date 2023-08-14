import type { FetchResponse, ErrorResponse } from '@/src/types/fetch';
import axios from 'axios';

const apiUrl = 'https://api.github.com/users/';
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const fetchUserData = async (username: string): Promise<FetchResponse> => {
  try {
    const { data } = await axios.get<FetchResponse>(apiUrl + username);
    const date = new Date(data.created_at);
    const formattedDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
    const fetchedData: FetchResponse = { ...data, created_at: formattedDate };
    return fetchedData;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const response = e.response?.data as ErrorResponse;
      throw new Error(response.message);
    }
    throw new Error('Something went wrong');
  }
};

export default fetchUserData;
