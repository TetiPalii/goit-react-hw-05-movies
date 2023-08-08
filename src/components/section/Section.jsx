import { SectionContainer, SectionStyled, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <SectionContainer className="container">
        <Title>{title}</Title>
        {children}
      </SectionContainer>
    </SectionStyled>
  );
};
