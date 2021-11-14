import { UserInformationStyled } from './styles/UserInformationStyled.styled';
import { LocationIcon } from './IconComponents/LocationIcon';
import { LinkIcon } from './IconComponents/LinkIcon';
import { TwitterIcon } from './IconComponents/TwitterIcon';
import { CompanyIcon } from './IconComponents/CompanyIcon';
import { Info } from './Info';

export const UserInformation = ({ location, twitter, blog, company }) => {
  return (
    <UserInformationStyled>
      <Info text={location} type="text" icon={<LocationIcon />} />
      <Info text={blog} type="link" icon={<LinkIcon />} />
      <Info text={twitter} type="text" icon={<TwitterIcon />} />
      <Info text={company} type="text" icon={<CompanyIcon />} />
    </UserInformationStyled>
  );
};
