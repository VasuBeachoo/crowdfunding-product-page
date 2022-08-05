import styled, { css } from "styled-components";

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  text-align: center;
  user-select: none;
  background-color: ${(props) =>
    props.theme.btnBgClr || "var(--Moderate-cyan)"};
  color: var(--White);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.01rem;
  border-radius: 1.5rem;
  padding: 0.875rem 1.5rem;
  transition: 0.25s;

  ${(props) =>
    props.theme.name !== "unavailable" &&
    css`
      &:hover {
        cursor: pointer;
        background-color: var(--Dark-cyan);
      }
    `}
`;

export default Button;
