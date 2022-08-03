import styled from "styled-components";
import Header from "./components/Header";
import About from "./components/About";
import Stats from "./components/Stats";

const AppContainer = styled.div``;

const HeaderContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <About />
      <Stats />
    </AppContainer>
  );
};

export default App;
