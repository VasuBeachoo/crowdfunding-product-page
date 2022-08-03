import styled from "styled-components";
import NavLinks from "./NavLinks";

export const Container = styled.div``;

export const Logo = styled.img``;

const Header = ({ className }) => {
  const navLinks = ["About", "Discover", "Get Started"];

  return (
    <Container className={className}>
      <Logo />
      <NavLinks links={navLinks} />
    </Container>
  );
};

export default Header;
