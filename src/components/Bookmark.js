import styled from "styled-components";
import iconBookmark from "../assets/icon-bookmark.svg";

export const Icon = styled.img`
  width: 2.9rem;
  transform: translateX(3rem);
  transition: 0.2s;
`;

export const Label = styled.p`
  background-color: hsl(0, 0%, 90%);
  color: var(--Dark-gray);
  font-weight: 500;
  border-radius: 1.5rem;
  padding: 0.83rem 2rem 0.83rem 4rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;

  &:hover {
    cursor: pointer;

    ${Icon} {
      opacity: 0.6;
    }
  }
`;

const Bookmark = ({ className }) => {
  return (
    <Container className={className}>
      <Icon src={iconBookmark} alt="bookmark-icon" />
      <Label>Bookmark</Label>
    </Container>
  );
};

export default Bookmark;
