import {
  globalStyles,
  Container,
  Title,
  Subtitle,
  HeroContainer,
  ButtonContainer,
  Image,
  LeftContainer,
  RightContainer,
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
  SubtitleContainer,
  CtaContainer,
  CtaLeft,
  CtaRight,
  CtaButtonsContainer,
  CtaDivider,
  CtaStarIconsContainer,
  StarsContainer,
  CtaStarIcon,
  CtaStarTitle,
  CtaStarSubtitle,
  FooterContainer,
  FooterTitle,
  FooterTitleAlt,
  FooterItemsContainer,
  FooterItemTitle,
  FooterItem,
  FooterSubtitle,
} from './Styles';
import { Navbar, Button } from './components';
import heroImage from './assets/heroImage.png';
import sectionImageChat from './assets/sectionImageChat.png';
import ctaImage from './assets/ctaImage.png';
import Star from './assets/starIcon.svg';

function App() {
  globalStyles();

  return (
    <Container>
      <Navbar />
      <HeroContainer>
        <LeftContainer>
          <Title>
            Have your <br /> best chat
          </Title>
          <Subtitle>Fast, easy & unlimited team chat</Subtitle>
          <ButtonContainer>
            <Button color='orange' text='Try it Free' />
            <Button color='white' text='Get a Demo' />
          </ButtonContainer>
        </LeftContainer>
        <RightContainer>
          <Image src={heroImage} alt='' />
        </RightContainer>
      </HeroContainer>

      <SectionContainer>
        <SectionTitle>Instant team chats</SectionTitle>
        <SubtitleContainer>
          <SectionSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
          </SectionSubtitle>
        </SubtitleContainer>
        <Button color='alt' text='Learn More' />
        <Image src={sectionImageChat} alt='' />
      </SectionContainer>

      <CtaContainer>
        <CtaLeft>
          <Image cta src={ctaImage} alt='' />
        </CtaLeft>
        <CtaRight>
          <SectionTitle big>
            Perfect Solution <br /> for Small <br /> Businesses
          </SectionTitle>
          <SectionSubtitle big>Pricing plans that fit like a glove.</SectionSubtitle>
          <CtaButtonsContainer>
            <Button color='yellow' text='Try it Free' />
            <Button color='white' text='Get a Demo' />
          </CtaButtonsContainer>
          <CtaDivider />
          <CtaStarIconsContainer>
            <StarsContainer>
              <CtaStarIcon src={Star} alt='' />
              <CtaStarIcon src={Star} alt='' />
              <CtaStarIcon src={Star} alt='' />
              <CtaStarIcon src={Star} alt='' />
              <CtaStarIcon src={Star} alt='' />
            </StarsContainer>
            <CtaStarTitle>
              5,200 businesses {''}
              <CtaStarSubtitle>
                use ChatApp <br /> and they rate it as {''}
              </CtaStarSubtitle>
              5-stars.
            </CtaStarTitle>
          </CtaStarIconsContainer>
        </CtaRight>
      </CtaContainer>

      <FooterContainer>
        <FooterItemsContainer alt>
          <FooterTitle>
            Chat<FooterTitleAlt>app</FooterTitleAlt>
          </FooterTitle>
          <FooterSubtitle>
            The last team chat you <br /> will ever need.
          </FooterSubtitle>
          <FooterSubtitle copyright>© Copyright ChatApp Inc.</FooterSubtitle>
        </FooterItemsContainer>
        <FooterItemsContainer>
          <FooterItemTitle>Help</FooterItemTitle>
          <FooterItem>Support</FooterItem>
          <FooterItem>Knowledgment</FooterItem>
          <FooterItem>Tutorials</FooterItem>
        </FooterItemsContainer>
        <FooterItemsContainer>
          <FooterItemTitle>Features</FooterItemTitle>
          <FooterItem>Screen Sharing</FooterItem>
          <FooterItem>iOs & Android Apps</FooterItem>
          <FooterItem>File Sharing</FooterItem>
          <FooterItem>User Management</FooterItem>
        </FooterItemsContainer>
        <FooterItemsContainer>
          <FooterItemTitle>Company</FooterItemTitle>
          <FooterItem>About Us</FooterItem>
          <FooterItem>Careers</FooterItem>
          <FooterItem>Contact Us</FooterItem>
        </FooterItemsContainer>
        <FooterItemsContainer>
          <FooterItemTitle>Contact Us</FooterItemTitle>
          <FooterItem>info@chatapp.com</FooterItem>
          <FooterItem>1-800-200-300</FooterItem>
          <FooterItem>
            3500 Deer Creek Rd <br /> Palo Alto, CA
          </FooterItem>
        </FooterItemsContainer>
      </FooterContainer>
    </Container>
  );
}

export default App;
