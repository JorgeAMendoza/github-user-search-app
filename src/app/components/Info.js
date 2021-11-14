import { InfoStyled } from './styles/Info.styled';

export const Info = ({ text, type, icon }) => {
  const writeSomething = () => {
    if (!text) return 'Not Availible';
    else if (type === 'link')
      return (
        <a target="__blank" href={text}>
          {text}
        </a>
      );
    else return text;
  };
  const availible = text ? true : false;
  return (
    <InfoStyled fade={availible ? 1 : 0.5}>
      <span>{icon}</span>
      {writeSomething()}
    </InfoStyled>
  );
};
