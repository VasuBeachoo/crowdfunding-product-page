import styled from "styled-components";
import Header from "./components/Header";
import About from "./components/About";

const AppContainer = styled.div``;

const HeaderContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <About />
    </AppContainer>
  );
};

export default App;
