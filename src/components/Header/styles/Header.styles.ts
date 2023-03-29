import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
  max-width: 1512.5px;
  width: 100%;
  height: 89px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px rgba(0, 66, 255, 0.1);
  display: flex;
  align-items: center;
`;

export const StyledHeaderWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
`;

export const StyledHeaderNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  a {
    font-size: 16px;
    color: #000;
    font-weight: bold;
    line-height: 19px;
  }

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const StyledHeaderButton = styled.div`
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const StyledHeaderButtonBars = styled.button`
  display: none;

  @media only screen and (max-width: 750px) {
    display: flex;
  }
`;
