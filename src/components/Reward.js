import styled, { ThemeProvider } from "styled-components";
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
  opacity: ${(props) => props.theme.name === "unavailable" && "0.5"};
  padding: 2rem 2.25rem;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Name = styled.h1`
  font-size: 1.35rem;
  margin: 0;
`;

export const PledgeReq = styled.p`
  color: var(--Moderate-cyan);
  text-align: right;
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
  gap: 2rem;
  width: 100%;
`;

export const renderRewards = (rewards, btnAction) => {
  let key = 2000;

  return (
    rewards &&
    rewards.map((reward) => (
      <Reward
        key={key++}
        name={reward.name}
        pledgeReq={reward.pledgeReq}
        description={reward.desc}
        stockAmt={reward.stockAmt}
        btnAction={reward.stockAmt !== 0 && btnAction}
      />
    ))
  );
};

const Reward = ({
  className,
  name,
  pledgeReq,
  description,
  stockAmt,
  btnAction,
}) => {
  const themes = {
    available: { name: "available", btnBgClr: "var(--Moderate-cyan)" },
    unavailable: { name: "unavailable", btnBgClr: "var(--Dark-gray)" },
  };

  return (
    <ThemeProvider
      theme={stockAmt === 0 ? themes.unavailable : themes.available}
    >
      <Container className={className}>
        <TopContainer>
          <Name>{name}</Name>
          {pledgeReq !== undefined && (
            <PledgeReq>Pledge ${pledgeReq} or more</PledgeReq>
          )}
        </TopContainer>
        <Description>{description}</Description>
        <BottomContainer>
          {stockAmt !== undefined && <StockLeft stockAmt={stockAmt} />}
          <Button onClick={btnAction}>
            {stockAmt === 0 ? "Out of stock" : "Select Reward"}
          </Button>
        </BottomContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Reward;
