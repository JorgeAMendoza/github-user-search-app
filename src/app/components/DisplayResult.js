import { convertDate } from '../utils/convert-date';
import { UserGithubStats } from './UserGitHubStats';
import { UserInformation } from './UserInformation';
import { DisplayResultsStyled } from './styles/DisplayResults.styled';
import { UserBio } from './styles/UserBio.styled';
import { UserName } from './styles/UserName.styled';
import { UserImage } from './styles/UserImage.styled';

export const DisplayResult = ({ data }) => {
  return (
    <DisplayResultsStyled>
      <UserImage>
        <img src={data.avatar_url} alt="User Profile"></img>
      </UserImage>

      <UserName>
        <h2>{data.name}</h2>
        <a target="__blank" href={data.html_url}>
          @{data.login}
        </a>
        <p>Joined {convertDate(data.created_at)}</p>
      </UserName>

      {/* <UserBio>{data.bio}</UserBio> */}
      {data.bio ? (
        <UserBio>{data.bio}</UserBio>
      ) : (
        <UserBio>This Profile has no bio.</UserBio>
      )}

      <UserGithubStats
        repos={data.public_repos}
        followers={data.followers}
        following={data.following}
      ></UserGithubStats>

      {/* User Information */}
      <UserInformation
        location={data.location}
        twitter={data.twitter_username}
        blog={data.blog}
        company={data.company}
      ></UserInformation>
    </DisplayResultsStyled>
  );
};
