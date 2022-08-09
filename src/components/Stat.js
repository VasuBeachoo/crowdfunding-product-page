import styled from "styled-components";
import { mixinLightText } from "../mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

export const HeavyText = styled.h1`
  font-size: 1.75rem;
  margin: 0;
`;

export const LightText = styled.p`
  ${mixinLightText}
  margin: 0.1rem 0 0 0;
`;

const Stat = ({ className, heavyText, lightText }) => {
  return (
    <Container className={className}>
      <HeavyText>{heavyText}</HeavyText>
      <LightText>{lightText}</LightText>
    </Container>
  );
};

export default Stat;
