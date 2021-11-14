import styled from 'styled-components';
import { device } from './styled-utils/device';

export const UserName = styled.div`
  grid-area: userName;
  margin-left: 1.5rem;

  @media ${device.laptop} {
    margin-left: 0;
  }
  h2 {
    color: ${({ theme }) => theme.userName};
    grid-area: name;
  }

  a {
    color: ${({ theme }) => theme.searchName};
    grid-area: username;
  }

  p {
    color: ${({ theme }) => theme.dateJoined};
    grid-area: join-date;
    justify-self: end;
    align-self: center;
    margin-top: 1.5rem;

    @media ${device.laptop} {
      margin-top: 0;
    }
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-areas:
      'name join-date'
      'username username';

    gap: 1rem;
  }
`;
