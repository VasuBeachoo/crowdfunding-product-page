import styled from "styled-components";

export const Container = styled.div``;

export const StockAmt = styled.p``;

export const StockText = styled.p``;

const StockLeft = ({ className, stockAmt }) => {
  return (
    <Container className={className}>
      <StockAmt>{stockAmt}</StockAmt>
      <StockLeft> left</StockLeft>
    </Container>
  );
};

export default StockLeft;
