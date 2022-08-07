import styled from "styled-components";

export const OuterCircle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translateY(0.2rem);
  border: 0.1rem solid hsl(0, 0%, 90%);
  border-radius: 100%;
  padding: 0.3rem;
  transition: 0.2s;
`;

export const InnerCircle = styled.div`
  width: 1.15rem;
  height: 1.15rem;
  background-color: ${(props) =>
    props.selected ? "var(--Moderate-cyan)" : "var(--White)"};
  border-radius: 100%;
`;

const PopupSelect = ({ className, selected }) => {
  return (
    <OuterCircle className={className}>
      <InnerCircle selected={selected} />
    </OuterCircle>
  );
};

export default PopupSelect;
