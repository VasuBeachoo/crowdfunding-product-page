import { css } from "styled-components";

export const themes = {
  available: { name: "available", btnBgClr: "var(--Moderate-cyan)" },
  unavailable: { name: "unavailable", btnBgClr: "var(--Dark-gray)" },
};

export const mixinSection = css`
  width: 100%;
  background-color: var(--White);
  border-radius: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  padding: 2.1rem 3rem;
`;

export const mixinLightText = css`
  color: var(--Dark-gray);
  letter-spacing: 0.01rem;
  line-height: 1.75rem;
`;
