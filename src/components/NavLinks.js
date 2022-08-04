import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.75rem;
`;

export const Link = styled.p`
  user-select: none;
  color: var(--White);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.4rem;
  }
`;

const NavLinks = ({ className, links }) => {
  let key = 1000;

  return (
    <Container className={className}>
      {links && links.map((link) => <Link key={key++}>{link}</Link>)}
    </Container>
  );
};

export default NavLinks;
