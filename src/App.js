import styled from "styled-components";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Stats from "./components/Stats";

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
    </AppContainer>
  );
};

export default App;
