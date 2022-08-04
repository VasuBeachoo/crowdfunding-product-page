import styled from "styled-components";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Stats from "./components/Stats";
import About from "./components/About";
import logoMastercraft from "./assets/logo-mastercraft.svg";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;

const App = () => {
  const productData = {
    icon: logoMastercraft,
    name: "Mastercraft Bamboo Monitor Riser",
    shortDesc:
      "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
    stats: {
      amtBacked: 89914,
      amtGoal: 100000,
      totalBackers: 5007,
      daysLeft: 56,
    },
    longDesc:
      "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.\n\nFeaturing artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
    rewards: [
      {
        name: "Bamboo Stand",
        pledgeReq: 25,
        desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
        stockAmt: 101,
      },
      {
        name: "Black Edition Stand",
        pledgeReq: 75,
        desc: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        stockAmt: 64,
      },
      {
        name: "Mahogany Special Edition",
        pledgeReq: 200,
        desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        stockAmt: 0,
      },
    ],
  };

  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ProductContainer>
        <Overview
          icon={productData.icon}
          name={productData.name}
          description={productData.shortDesc}
        />
        <Stats stats={productData.stats} />
        <About
          description={productData.longDesc}
          rewards={productData.rewards}
        />
      </ProductContainer>
    </AppContainer>
  );
};

export default App;
