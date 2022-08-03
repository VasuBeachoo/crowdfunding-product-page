import styled from "styled-components";

export const Container = styled.div``;

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
