import styled from "styled-components";
import iconBookmark from "../assets/icon-bookmark.svg";

export const Container = styled.div``;

export const Icon = styled.img``;

export const Label = styled.p``;

const Bookmark = ({ className }) => {
  return (
    <Container className={className}>
      <Icon src={iconBookmark} alt="bookmark-icon" />
      <Label>Label</Label>
    </Container>
  );
};

export default Bookmark;
