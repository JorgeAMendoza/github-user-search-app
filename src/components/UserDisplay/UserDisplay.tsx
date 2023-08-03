import type { FetchResponse } from '@/src/types/fetch';
import {
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
  CompanyIcon,
} from '@/src/components/Icons';
import style from './user-display.module.css';

type UserDisplay = Omit<FetchResponse, 'id'>;

interface UserDisplayProps {
  userInfo: UserDisplay;
}

const UserDisplay = ({ userInfo }: UserDisplayProps) => {
  return (
    <section className={style.userDisplay}>
      <div className={style.userInfo}>
        <img
          src={userInfo.avatar_url}
          alt={`github user ${userInfo.login}`}
          data-testid="userAvatar"
        />
        <div className={style.usernameInfo}>
          <h2 data-testid="username">{userInfo.name}</h2>
          <p data-testid="userhandle" className={style.username}>
            @{userInfo.login}
          </p>
          <p className={style.userJoined} data-testid="userJoined">
            Joined {userInfo.created_at}
          </p>
        </div>
      </div>

      <p className={style.userBio} data-testid="userBio">
        {userInfo.bio ? userInfo.bio : 'This profile has no bio'}
      </p>

      <div className={style.userStats}>
        <p>
          Repos <span data-testid="repoCount">{userInfo.public_repos}</span>
        </p>
        <p>
          Followers{' '}
          <span data-testid="followersCount">{userInfo.followers}</span>
        </p>
        <p>
          Following{' '}
          <span data-testid="followingCount">{userInfo.following}</span>
        </p>
      </div>

      <div className={style.userLinks}>
        <p
          data-testid="userLocation"
          data-active={userInfo.location ? true : false}
        >
          <LocationIcon />
          <span>{userInfo.location ? userInfo.location : 'Not Available'}</span>
        </p>
        <p data-testid="userBlog" data-active={userInfo.blog ? true : false}>
          <WebsiteIcon />
          {userInfo.blog ? (
            <a href={userInfo.blog} target="_blank" rel="noreferrer">
              {userInfo.blog}
            </a>
          ) : (
            'Not Available'
          )}
        </p>
        <p
          data-testid="userTwitter"
          data-active={userInfo.twitter_username ? true : false}
        >
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
        <p
          data-testid="userCompany"
          data-active={userInfo.company ? true : false}
        >
          <CompanyIcon />
          <span>{userInfo.company ? userInfo.company : 'Not Available'}</span>
        </p>
      </div>
    </section>
  );
};

export default UserDisplay;
