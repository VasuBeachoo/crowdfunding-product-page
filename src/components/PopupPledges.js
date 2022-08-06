import styled from "styled-components";
import Reward, { renderRewards } from "./Reward";
import { mixinLightText } from "../mixins";
import iconClose from "../assets/icon-close-modal.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CloseIcon = styled.img`
  align-self: flex-end;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

export const Heading = styled.h1`
  font-size: 1.65rem;
  margin: 0;
`;

export const Paragraph = styled.p`
  ${mixinLightText}
  margin: 0.5rem 0 1rem;
`;

export const Rewards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.85rem;
  overflow-y: auto;
  width: 100%;
  max-height: 60vh;
  font-size: 95%;
  padding: 2rem;
`;

const PopupPledges = ({ className, productName, rewards, closePopup }) => {
  return (
    <Container className={className}>
      <CloseIcon src={iconClose} alt="close-icon" onClick={closePopup} />
      <Heading>Back this project</Heading>
      <Paragraph>
        Want to support us in bringing {productName} out in the world?
      </Paragraph>
      <Rewards>
        <Reward
          name="Pledge with no reward"
          description="Choose to support us with no reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
        />
        {renderRewards(rewards)}
      </Rewards>
    </Container>
  );
};

export default PopupPledges;
