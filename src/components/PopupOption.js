import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";
import { themes, mixinLightText } from "../mixins";
import { Container, Name, PledgeReq, Description } from "./Reward";
import StockLeft from "./StockLeft";
import Button from "./Button";

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & ${Description} {
    font-size: 0.975rem;
    margin-top: 0.85rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
  width: 100%;

  ${(props) =>
    props.theme.name !== "unavailable" &&
    css`
      & ${Name} {
        user-select: none;
        transition: 0.2s;

        &:hover {
          cursor: pointer;
          color: var(--Moderate-cyan);
        }
      }
    `}

  & ${PledgeReq} {
    margin-right: auto;
  }
`;

export const Divider = styled.hr`
  width: 114.5%;
  opacity: 0.5;
  margin: 0.05rem 0 1.75rem 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;

export const Label = styled.p`
  ${mixinLightText} {
    font-size: 1.05rem;
  }
`;

export const renderPopupOptions = (rewards) => {
  let key = 5000;

  return (
    rewards &&
    rewards.map((reward) => (
      <PopupOption
        key={key++}
        name={reward.name}
        pledgeReq={reward.pledgeReq}
        description={reward.desc}
        stockAmt={reward.stockAmt}
      />
    ))
  );
};

const PopupOption = ({ className, name, pledgeReq, description, stockAmt }) => {
  return (
    <ThemeProvider
      theme={stockAmt === 0 ? themes.unavailable : themes.available}
    >
      <Container className={className}>
        <TopContainer>
          <InfoContainer>
            <HeaderContainer>
              <Name>{name}</Name>
              {pledgeReq !== undefined && (
                <PledgeReq>Pledge ${pledgeReq} or more</PledgeReq>
              )}
              {stockAmt !== undefined && <StockLeft stockAmt={stockAmt} />}
            </HeaderContainer>
            <Description>{description}</Description>
          </InfoContainer>
        </TopContainer>
        <Divider />
        <BottomContainer>
          <Label>Enter your pledge</Label>
          <Button>Continue</Button>
        </BottomContainer>
      </Container>
    </ThemeProvider>
  );
};

export default PopupOption;
