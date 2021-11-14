import styled from 'styled-components';
import { device } from './styled-utils/device';

export const DisplayResultsStyled = styled.section`
  background-color: ${({ theme }) => theme.resultsBackground};
  margin-top: 3rem;
  padding: 2.2em 1.7em;
  border-radius: 15px;

  display: grid;
  grid-template-areas:
    'userImage userName'
    'UserBio UserBio'
    'UserGitHubStats UserGitHubStats'
    'UserInformation UserInformation';
  gap: 1rem;
  grid-template-columns: auto 1fr;

  @media ${device.laptop} {
    grid-template-areas:
      'userImage userName'
      'userImage UserBio'
      'UserImage UserGitHubStats'
      'UserImage UserInformation';

    grid-template-columns: 1fr 3fr;
  }
`;
