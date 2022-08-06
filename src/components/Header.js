import styled from "styled-components";
import NavLinks from "./NavLinks";
import logo from "../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Logo = styled.img``;

const Header = ({ className }) => {
  const navLinks = ["About", "Discover", "Get Started"];

  return (
    <Container className={className}>
      <Logo src={logo} alt="crowdfund-logo" />
      <NavLinks links={navLinks} />
    </Container>
  );
};

export default Header;
