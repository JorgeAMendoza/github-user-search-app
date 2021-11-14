import styled from 'styled-components';
import { device } from './styled-utils/device';

export const UserInformationStyled = styled.div`
  grid-area: UserInformation;
  margin-top: 1.5rem;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  p {
    display: flex;
    gap: 1.2rem;
    margin-top: 1.5rem;
    align-items: center;
    color: ${({ theme }) => theme.userSocial.color};
  }

  span {
    width: 2.5rem;
    text-align: center;

    svg path {
      fill: ${({ theme }) => theme.userSocial.color};
    }
  }

  a:visited {
    color: ${({ theme }) => theme.userSocial.color};
  }
`;
