import styled from "styled-components";
import { mixinLightText } from "../mixins";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 1000px) {
    align-items: flex-start;
    width: 100%;
  }
`;

export const StockAmt = styled.h1`
  font-size: 1.75rem;
  margin: 0;
`;

export const StockText = styled.p`
  ${mixinLightText}
  margin: 0;
  transform: translateY(0.125rem);
`;

const StockLeft = ({ className, stockAmt }) => {
  return (
    <Container className={className}>
      <StockAmt>{stockAmt}</StockAmt>
      <StockText> left</StockText>
    </Container>
  );
};

export default StockLeft;
