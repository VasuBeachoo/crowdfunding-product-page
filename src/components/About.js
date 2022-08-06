import styled from "styled-components";
import { renderRewards } from "./Reward";
import { mixinSection, mixinLightText } from "../mixins";

export const Container = styled.div`
  ${mixinSection}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const Heading = styled.h1`
  font-size: 1.35rem;
  margin: 0.6rem 0 0.9rem 0;
`;

export const Description = styled.p`
  ${mixinLightText}
`;

export const Rewards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.85rem;
  width: 100%;
  margin: 1.65rem 0 2rem 0;
`;

const About = ({ className, description, rewards, openPopup }) => {
  return (
    <Container classNaame={className}>
      <Heading>About this project</Heading>
      <Description>{description}</Description>
      <Rewards>{renderRewards(rewards, openPopup)}</Rewards>
    </Container>
  );
};

export default About;
