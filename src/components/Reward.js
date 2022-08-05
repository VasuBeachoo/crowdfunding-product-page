import styled from "styled-components";
import StockLeft from "./StockLeft";
import Button from "./Button";
import { mixinLightText } from "../mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 0.85rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 2rem 2.25rem;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Name = styled.h1`
  font-size: 1.35rem;
  margin: 0;
`;

export const PledgeReq = styled.p`
  color: var(--Moderate-cyan);
  font-weight: 500;
  margin: 0;
`;

export const Description = styled.p`
  ${mixinLightText}
  margin: 1.5rem 0 1.75rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Reward = ({ className, name, pledgeReq, description, stockAmt }) => {
  return (
    <Container className={className}>
      <TopContainer>
        <Name>{name}</Name>
        <PledgeReq>Pledge ${pledgeReq} or more</PledgeReq>
      </TopContainer>
      <Description>{description}</Description>
      <BottomContainer>
        <StockLeft stockAmt={stockAmt} />
        <Button>Select Reward</Button>
      </BottomContainer>
    </Container>
  );
};

export default Reward;
