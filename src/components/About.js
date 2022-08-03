import styled from "styled-components";
import Button from "./Button";
import Bookmark from "./Bookmark";

export const Container = styled.div``;

export const Icon = styled.img``;

export const Name = styled.h1``;

export const Description = styled.p``;

export const Btns = styled.div``;

const About = ({ className, name, description }) => {
  return (
    <Container className={className}>
      <Icon />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Btns>
        <Button>Back this project</Button>
        <Bookmark />
      </Btns>
    </Container>
  );
};

export default About;
