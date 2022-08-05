import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";
import iconBookmark from "../assets/icon-bookmark.svg";

export const Icon = styled.img`
  position: absolute;
  width: 3rem;
  ${(props) =>
    props.theme.name === "bookmarked" &&
    css`
      filter: invert(66%) sepia(32%) saturate(780%) hue-rotate(127deg)
        brightness(88%) contrast(84%);
    `};
  transition: 0.2s;
  z-index: 2;
`;

export const Label = styled.p`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  letter-spacing: 0.01rem;
  border-radius: 1.5rem;
  padding: 0.83rem 2rem 0.83rem 4.25rem;
  margin: 0;
  transition: 0.2s;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;

  &:hover {
    cursor: pointer;

    ${(props) =>
      props.theme.name !== "bookmarked" &&
      css`
        ${Icon} {
          opacity: 0.6;
        }

        ${Label} {
          opacity: 0.6;
        }
      `}
  }
`;

const Bookmark = ({ className, bookmarked, setBookmarked }) => {
  const themes = {
    default: {
      name: "default",
      primary: "var(--Dark-gray)",
      secondary: "hsl(0, 0%, 95%)",
    },
    bookmarked: {
      name: "bookmarked",
      primary: "var(--Dark-cyan)",
      secondary: "hsl(0, 10%, 97%)",
    },
  };

  return (
    <ThemeProvider theme={bookmarked ? themes.bookmarked : themes.default}>
      <Container
        className={className}
        onClick={() => setBookmarked(!bookmarked)}
      >
        <Icon src={iconBookmark} alt="bookmark-icon" />
        <Label>{bookmarked ? "Bookmarked" : "Bookmark"}</Label>
      </Container>
    </ThemeProvider>
  );
};

export default Bookmark;
