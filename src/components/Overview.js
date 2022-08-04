import styled from "styled-components";
import Button from "./Button";
import Bookmark from "./Bookmark";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Icon = styled.img``;

export const Name = styled.h1``;

export const Description = styled.p``;

export const Btns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Overview = ({ className, icon, name, description }) => {
  return (
    <Container className={className}>
      <Icon src={icon} alt="product-logo" />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Btns>
        <Button>Back this project</Button>
        <Bookmark />
      </Btns>
    </Container>
  );
};

export default Overview;
