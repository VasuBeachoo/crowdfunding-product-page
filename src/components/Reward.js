import styled from "styled-components";
import StockLeft from "./StockLeft";
import Button from "./Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Name = styled.h1``;

export const PledgeReq = styled.p``;

export const Description = styled.p``;

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
        <Button>Label</Button>
      </BottomContainer>
    </Container>
  );
};

export default Reward;
