import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HeavyText = styled.h1``;

export const LightText = styled.p``;

const Stat = ({ className, heavyText, lightText }) => {
  return (
    <Container className={className}>
      <HeavyText>{heavyText}</HeavyText>
      <LightText>{lightText}</LightText>
    </Container>
  );
};

export default Stat;
