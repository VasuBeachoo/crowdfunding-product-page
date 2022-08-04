import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

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
