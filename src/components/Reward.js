import styled from "styled-components";
import StockLeft from "./StockLeft";
import Button from "./Button";

export const Container = styled.div``;

export const TopContainer = styled.div``;

export const Name = styled.h1``;

export const PledgeReq = styled.p``;

export const Description = styled.p``;

export const BottomContainer = styled.div``;

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
