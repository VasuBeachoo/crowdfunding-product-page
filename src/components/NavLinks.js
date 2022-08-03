import styled from "styled-components";

export const Container = styled.div``;

export const Link = styled.p``;

const NavLinks = ({ className, links }) => {
  return (
    <Container className={className}>
      {links.map((link) => (
        <Link>{link}</Link>
      ))}
    </Container>
  );
};

export default NavLinks;
