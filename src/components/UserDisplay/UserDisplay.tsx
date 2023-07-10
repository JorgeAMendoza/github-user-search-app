import type { FetchResponse } from '@/src/types/fetch';
import {
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
  CompanyIcon,
} from '@/src/components/Icons';

type UserDisplayProps = Omit<FetchResponse, 'id'>;

const UserDisplay = (props: UserDisplayProps) => {
  return (
    <section>
      <div>
        <img src={props.avatar_url} alt={`github user ${props.login}`} />
        <div>
          <h2>{props.name}</h2>
          <p>{props.login}</p>
        </div>
        <p>{props.created_at}</p>
        <p>{props.bio}</p>
      </div>

      <div>
        <p>
          Repos: <span>{props.public_repos}</span>
        </p>
        <p>
          Followers: <span>{props.followers}</span>
        </p>
        <p>
          Following: <span>{props.following}</span>
        </p>
      </div>

      <div>
        <p>
          <LocationIcon />
          {props.location ? props.location : 'Not Available'}
        </p>
        <p>
          <TwitterIcon />
          {props.twitter_username ? props.twitter_username : 'Not Available'}
        </p>
        <p>
          <WebsiteIcon />
          {props.blog ? props.blog : 'Not Available'}
        </p>
        <p>
          <CompanyIcon />
          {props.location ? props.location : 'Not Available'}
        </p>
      </div>
    </section>
  );
};

export default UserDisplay;
