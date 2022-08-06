import styled from "styled-components";
import { mixinSection, mixinLightText } from "../mixins";
import Button from "./Button";
import Bookmark from "./Bookmark";

export const Container = styled.div`
  ${mixinSection}
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

export const Icon = styled.img`
  position: absolute;
  top: -1.5rem;
  width: 3rem;
`;

export const Name = styled.h1`
  color: var(--Black);
  font-size: 1.8rem;
  margin: 1.1rem 0 0 0;
`;

export const Description = styled.p`
  ${mixinLightText}
  font-size: 1rem;
  margin: 0.5rem 0 2rem;
`;

export const Btns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin: 0 0 1rem 0;
`;

const Overview = ({
  className,
  icon,
  name,
  description,
  bookmarked,
  setBookmarked,
  openPopup,
}) => {
  return (
    <Container className={className}>
      <Icon src={icon} alt="product-logo" />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Btns>
        <Button onClick={openPopup}>Back this project</Button>
        <Bookmark bookmarked={bookmarked} setBookmarked={setBookmarked} />
      </Btns>
    </Container>
  );
};

export default Overview;
