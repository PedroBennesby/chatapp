import { Container, LogoBase, LogoAlt, Links, LinksContainer, Button } from './styles';

export const Navbar = () => {
  return (
    <Container>
      <LogoBase>
        Chat<LogoAlt>app</LogoAlt>
      </LogoBase>
      <LinksContainer>
        <Links>Products</Links>
        <Links>Services</Links>
        <Links>Contact</Links>
        <Links>Log in</Links>
        <Button>Pricing & Free Trial</Button>
      </LinksContainer>
    </Container>
  );
};
