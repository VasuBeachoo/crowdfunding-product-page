import styled from "styled-components";

export const Container = styled.div``;

export const Link = styled.p``;

const NavLinks = ({ className, links }) => {
  let key = 1000;

  return (
    <Container className={className}>
      {links && links.map((link) => <Link key={key++}>{link}</Link>)}
    </Container>
  );
};

export default NavLinks;
