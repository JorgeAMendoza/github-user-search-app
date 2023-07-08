export interface FetchResponse {
  login: string;
  id: number;
  bio: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  twitter_username: string | null;
  location: string | null;
  blog: string | null;
  company: string | null;
}

export interface ErrorResponse {
  message: string;
  documentation_url: string;
}
