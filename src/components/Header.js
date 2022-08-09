import styled from "styled-components";
import NavLinks, { Link } from "./NavLinks";
import logo from "../assets/logo.svg";
import openMenuIcon from "../assets/icon-hamburger.svg";
import closeMenuIcon from "../assets/icon-close-menu.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const Logo = styled.img``;

export const HeaderNavLinks = styled(NavLinks)`
  position: relative;
  border-radius: 1rem;
  z-index: 3;

  @media (max-width: 1000px) {
    display: ${(props) => (props.menu ? "flex" : "none")};
    position: absolute;
    top: 2.5rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0;
    width: 100%;
    background-color: var(--White);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 1.5rem 2.25rem;

    ${Link} {
      width: 100%;
      color: var(--Black);
      font-weight: 500;
      margin: 1rem 0;
    }
  }
`;

export const MenuIcon = styled.img`
  display: none;
  transition: 0.2s;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: block;
  }
`;

const Header = ({ className, menu, setMenu }) => {
  const navLinks = ["About", "Discover", "Get Started"];

  return (
    <Container className={className}>
      <Logo src={logo} alt="crowdfund-logo" />
      <HeaderNavLinks links={navLinks} menu={menu} />
      <MenuIcon
        src={menu ? closeMenuIcon : openMenuIcon}
        alt={menu ? "close-icon" : "hamburger-icon"}
        onClick={() => setMenu(!menu)}
      />
    </Container>
  );
};

export default Header;
