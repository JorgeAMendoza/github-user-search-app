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
        <img
          src={userInfo.avatar_url}
          alt={`github user ${userInfo.login}`}
          data-testid="userAvatar"
        />
        <div>
          <h2 data-testid="username">{userInfo.name}</h2>
          <p data-testid="userhandle">@{userInfo.login}</p>
        </div>
        <p data-testid="userJoined">Joined {userInfo.created_at}</p>
        <p data-testid="userBio">
          {userInfo.bio ? userInfo.bio : 'This profile has no bio'}
        </p>
      </div>

      <div>
        <p>
          Repos: <span data-testid="repoCount">{userInfo.public_repos}</span>
        </p>
        <p>
          Followers:{' '}
          <span data-testid="followersCount">{userInfo.followers}</span>
        </p>
        <p>
          Following:{' '}
          <span data-testid="followingCount">{userInfo.following}</span>
        </p>
      </div>

      <div>
        <p data-testid="userLocation">
          <LocationIcon />
          <span>{userInfo.location ? userInfo.location : 'Not Available'}</span>
        </p>
        <p data-testid="userTwitter">
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
        <p data-testid="userBlog">
          <WebsiteIcon />
          {userInfo.blog ? (
            <a href={userInfo.blog} target="_blank" rel="noreferrer">
              {userInfo.blog}
            </a>
          ) : (
            'Not Available'
          )}
        </p>
        <p data-testid="userCompany">
          <CompanyIcon />
          <span>{userInfo.company ? userInfo.company : 'Not Available'}</span>
        </p>
      </div>
    </section>
  );
};

export default UserDisplay;
