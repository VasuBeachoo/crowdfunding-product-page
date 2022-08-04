import styled from "styled-components";
import Reward from "./Reward";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const Heading = styled.h1``;

export const Description = styled.p``;

export const Rewards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const About = ({ className, description, rewards }) => {
  let key = 2000;

  return (
    <Container classNaame={className}>
      <Heading>About this project</Heading>
      <Description>{description}</Description>
      <Rewards>
        {rewards &&
          rewards.map((reward) => (
            <Reward
              key={key++}
              name={reward.name}
              pledgeReq={reward.pledgeReq}
              description={reward.desc}
              stockAmt={reward.stockAmt}
            />
          ))}
      </Rewards>
    </Container>
  );
};

export default About;
