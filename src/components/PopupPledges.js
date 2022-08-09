import { useState } from "react";
import styled from "styled-components";
import PopupOption, { renderPopupOptions } from "./PopupOption";
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

  @media (max-width: 1000px) {
    padding: 2rem 1rem 2rem 0.2rem;
  }

  @media (max-width: 500px) {
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 2rem 0.2rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const PopupPledges = ({
  className,
  productName,
  rewards,
  setPopupType,
  closePopup,
  btnUsedId,
  pledgeAmt,
}) => {
  const [selectedId, setSelectedId] = useState(btnUsedId);

  const options = [
    <PopupOption
      key="10000"
      id={-1}
      name="Pledge with no reward"
      pledgeReq={0}
      description="Choose to support us with no reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
      selectedId={selectedId}
      setSelectedId={setSelectedId}
      setPopupType={setPopupType}
      pledgeAmt={pledgeAmt}
    />,
    renderPopupOptions(
      rewards,
      selectedId,
      setSelectedId,
      setPopupType,
      pledgeAmt
    ),
  ];

  return (
    <Container className={className}>
      <CloseIcon src={iconClose} alt="close-icon" onClick={closePopup} />
      <Heading>Back this project</Heading>
      <Paragraph>
        Want to support us in bringing {productName} out in the world?
      </Paragraph>
      <Rewards>{options}</Rewards>
    </Container>
  );
};

export default PopupPledges;
