import { useState } from "react";
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
  padding: 1.75rem 6rem;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: 60%;
  transform: translateY(-5rem);
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
  width: 67%;
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

  function openPopup() {
    setPopup(true);
  }

  function closePopup() {
    setBtnUsedId(-999);
    setPopup(false);
  }

  return (
    <PageContainer className={className}>
      <HeaderContainer bg={productData.headerBg}>
        <Header />
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

      {popup && (
        <>
          <DarkOverlay />
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
        </>
      )}
    </PageContainer>
  );
};

export default ProductPage;
