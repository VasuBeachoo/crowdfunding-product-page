import { useState, useEffect } from "react";
import styled from "styled-components";
import { mixinSection } from "../mixins";
import Header from "./Header";
import Overview from "./Overview";
import Stats from "./Stats";
import About from "./About";
import PopupPledges from "./PopupPledges";
import PopupCompleted from "./PopupCompleted";

const PageContainer = styled.div`
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
  min-height: 20rem;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0)),
    url(${(props) => props.bg});
  background-size: cover;
  background-position: bottom;
  padding: 2.75rem 7.5vw;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: 60%;
  transform: translateY(-5rem);

  @media (max-width: 1000px) {
    width: 85%;
  }
`;

const DarkOverlay = styled.div`
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--Black);
  opacity: 0.5;
`;

const PopupContainer = styled.div`
  ${mixinSection}
  position: fixed;
  top: 6.25vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;

  @media (max-width: 1000px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

function renderPopup(
  popupType,
  productData,
  setPopupType,
  closePopup,
  btnUsedId,
  pledgeAmt
) {
  switch (popupType) {
    case "pledges":
      return (
        <PopupPledges
          productName={productData.name}
          rewards={productData.rewards}
          setPopupType={setPopupType}
          closePopup={closePopup}
          btnUsedId={btnUsedId}
          pledgeAmt={pledgeAmt}
        />
      );
    case "completed":
      return (
        <PopupCompleted
          productName={productData.name}
          setPopupType={setPopupType}
          closePopup={closePopup}
        />
      );
    default:
      return <></>;
  }
}

const ProductPage = ({ className, productData, pledgeAmt }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupType, setPopupType] = useState("pledges");
  const [btnUsedId, setBtnUsedId] = useState(-999);
  const [menu, setMenu] = useState(false);

  function openPopup() {
    setPopup(true);
  }

  function closePopup() {
    setBtnUsedId(-999);
    setPopup(false);
  }

  function handleResize() {
    if (window.innerWidth > 1000) {
      setMenu(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <PageContainer className={className}>
      <HeaderContainer bg={productData.headerBg}>
        <Header menu={menu} setMenu={setMenu} />
      </HeaderContainer>
      <ProductContainer>
        <Overview
          icon={productData.icon}
          name={productData.name}
          description={productData.shortDesc}
          bookmarked={bookmarked}
          setBookmarked={setBookmarked}
          openPopup={openPopup}
        />
        <Stats stats={productData.stats} />
        <About
          description={productData.longDesc}
          rewards={productData.rewards}
          openPopup={openPopup}
          setBtnUsedId={setBtnUsedId}
        />
      </ProductContainer>

      {(popup || menu) && <DarkOverlay />}

      {popup && (
        <PopupContainer>
          {renderPopup(
            popupType,
            productData,
            setPopupType,
            closePopup,
            btnUsedId,
            pledgeAmt
          )}
        </PopupContainer>
      )}
    </PageContainer>
  );
};

export default ProductPage;
