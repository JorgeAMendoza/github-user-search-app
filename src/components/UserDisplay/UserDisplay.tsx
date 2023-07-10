import type { FetchResponse } from '@/src/types/fetch';
import {
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
  CompanyIcon,
} from '@/src/components/Icons';

type UserDisplay = Omit<FetchResponse, 'id'>;

interface UserDisplayProps {
  userInfo: UserDisplay;
}

const UserDisplay = ({ userInfo }: UserDisplayProps) => {
  return (
    <section>
      <div>
        <img src={userInfo.avatar_url} alt={`github user ${userInfo.login}`} />
        <div>
          <h2>{userInfo.name}</h2>
          <p>{userInfo.login}</p>
        </div>
        <p>{userInfo.created_at}</p>
        <p>{userInfo.bio}</p>
      </div>

      <div>
        <p>
          Repos: <span>{userInfo.public_repos}</span>
        </p>
        <p>
          Followers: <span>{userInfo.followers}</span>
        </p>
        <p>
          Following: <span>{userInfo.following}</span>
        </p>
      </div>

      <div>
        <p>
          <LocationIcon />
          {userInfo.location ? userInfo.location : 'Not Available'}
        </p>
        <p>
          <TwitterIcon />
          {userInfo.twitter_username ? (
            <a
              href={`https://twitter.com/${userInfo.twitter_username}`}
              rel="noreferrer"
              target="_blank"
            >
              {userInfo.twitter_username}
            </a>
          ) : (
            'Not Available'
          )}
        </p>
        <p>
          <WebsiteIcon />
          {userInfo.blog ? (
            <a href={userInfo.blog} target="_blank" rel="noreferrer">
              {userInfo.blog}
            </a>
          ) : (
            'Not Available'
          )}
        </p>
        <p>
          <CompanyIcon />
          {userInfo.location ? userInfo.location : 'Not Available'}
        </p>
      </div>
    </section>
  );
};

export default UserDisplay;
