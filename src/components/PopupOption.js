import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";
import { themes, mixinLightText } from "../mixins";
import PopupSelect, { OuterCircle } from "./PopupSelect";
import { Container, Name, PledgeReq, Description } from "./Reward";
import StockLeft from "./StockLeft";
import Button from "./Button";

export const OptionContainer = styled(Container)`
  ${(props) =>
    props.selectedId === props.id &&
    css`
      border: 0.2rem solid var(--Moderate-cyan);
    `};
  padding: 0;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem 2.25rem 0;

  ${(props) =>
    props.theme.name !== "unavailable" &&
    css`
      &:hover {
        cursor: pointer;

        & ${OuterCircle} {
          border-color: var(--Moderate-cyan);
        }

        & ${Name} {
          color: var(--Moderate-cyan);
        }
      }
    `}
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

  & ${PledgeReq} {
    text-align: center;
    margin-right: auto;
  }
`;

export const Divider = styled.hr`
  width: 100%;
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
  padding: 0 2.25rem 2rem;
`;

export const Label = styled.p`
  ${mixinLightText} {
    font-size: 1.05rem;
  }
`;

export const renderPopupOptions = (rewards, selectedId, setSelectedId) => {
  let key = 5000;
  let id = 0;

  return (
    rewards &&
    rewards.map((reward) => (
      <PopupOption
        key={key++}
        id={id++}
        name={reward.name}
        pledgeReq={reward.pledgeReq}
        description={reward.desc}
        stockAmt={reward.stockAmt}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
      />
    ))
  );
};

const PopupOption = ({
  className,
  id,
  name,
  pledgeReq,
  description,
  stockAmt,
  selectedId,
  setSelectedId,
}) => {
  return (
    <ThemeProvider
      theme={stockAmt === 0 ? themes.unavailable : themes.available}
    >
      <OptionContainer className={className} id={id} selectedId={selectedId}>
        <TopContainer
          onClick={stockAmt === 0 ? undefined : () => setSelectedId(id)}
        >
          <PopupSelect selected={selectedId === id} />
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
        {selectedId === id && (
          <>
            <Divider />
            <BottomContainer>
              <Label>Enter your pledge</Label>
              <Button>Continue</Button>
            </BottomContainer>
          </>
        )}
      </OptionContainer>
    </ThemeProvider>
  );
};

export default PopupOption;
