import styled from "styled-components";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Stats from "./components/Stats";
import About from "./components/About";

const AppContainer = styled.div``;

const HeaderContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Overview />
      <Stats />
      <About />
    </AppContainer>
  );
};

export default App;
