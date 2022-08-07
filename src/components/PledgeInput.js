import styled from "styled-components";

export const PledgeInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &:focus {
    border-color: var(--Moderate-cyan);
  }
`;

export const DollarSign = styled.p`
  position: absolute;
  left: 1rem;
  color: var(--Dark-gray);
  margin: 0;
`;

export const ValueInput = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 6rem;
  font-weight: 700;
  border: 0.1rem solid hsl(0, 0%, 90%);
  border-radius: 2rem;
  padding: 0.8rem 1.25rem 0.8rem 2rem;

  &:focus {
    border-color: var(--Moderate-cyan);
  }
`;

const PledgeInput = ({ className }) => {
  return (
    <PledgeInputContainer className={className}>
      <DollarSign>$</DollarSign>
      <ValueInput type="text" />
    </PledgeInputContainer>
  );
};

export default PledgeInput;
