import styled from "styled-components";
import { mixinLightText } from "../mixins";
import Button from "./Button";
import iconCheck from "../assets/icon-check.svg";

export const CompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 2vh 0;
`;

export const Icon = styled.img`
  width: clamp(3.5rem, 10vw, 4rem);
`;

export const Heading = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2rem);
`;

export const Paragraph = styled.p`
  ${mixinLightText}
  font-size: clamp(0.95rem, 2vw, 1rem);
  max-width: 28rem;
  margin: 0 0 1.25rem;
`;

const PopupCompleted = ({
  className,
  productName,
  setPopupType,
  closePopup,
}) => {
  return (
    <CompletedContainer className={className}>
      <Icon src={iconCheck} alt="check-icon" />
      <Heading>Thanks for your support!</Heading>
      <Paragraph>
        Your pledge brings us one step closer to sharing {productName}{" "}
        worldwide. You will get an email once our campaign is completed.
      </Paragraph>
      <Button
        onClick={() => {
          closePopup();
          setPopupType("pledges");
        }}
      >
        Got it!
      </Button>
    </CompletedContainer>
  );
};

export default PopupCompleted;
