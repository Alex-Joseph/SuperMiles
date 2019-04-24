import styled from 'styled-components';


const StyledMarketPlaceWrapper = styled.div`
  display: grid;
  place-content: center;
  padding: 24px 12px;

  h1 {
    text-align: center;
  }
`;

const StyledProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: grid;
    justify-items: center;
  }
`;

export { StyledMarketPlaceWrapper, StyledProductsWrapper };
