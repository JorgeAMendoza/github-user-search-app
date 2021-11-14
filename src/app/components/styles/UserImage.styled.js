import styled from 'styled-components';
import { device } from './styled-utils/device';

export const UserImage = styled.div`
  width: 12rem;
  grid-area: userImage;

  img {
    border-radius: 50%;
  }

  @media ${device.laptop} {
    justify-self: center;
  }
`;
