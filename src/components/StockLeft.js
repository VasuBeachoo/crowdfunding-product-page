import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StockAmt = styled.p``;

export const StockText = styled.p``;

const StockLeft = ({ className, stockAmt }) => {
  return (
    <Container className={className}>
      <StockAmt>{stockAmt}</StockAmt>
      <StockText> left</StockText>
    </Container>
  );
};

export default StockLeft;
