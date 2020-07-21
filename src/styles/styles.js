import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const MapBoxMap = styled.div`
  top: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -5;
`;

export const Header = styled.header`
  margin: 3vh auto;
  width: 90vw;
  padding: 2vh;
  text-align: center;
`;

export const Footer = styled.footer`
  width: 100%;
  min-height: 5vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  text-align: center;
  line-height: 25px;
  font-size: 13px;
`;

export const Features = styled.section`
  padding-top: 10vh;
  padding-bottom: 10vh;
  z-index: 100;

  @media (max-width: 750px) {
    width: 90vw;
    margin: 0 auto;
  }
`;

export const center = css`
  width: 50vw;
  margin: 0 auto;
`;

export const left = css`
  width: 33vw;
  margin-left: 5vw;
`;

export const right = css`
  width: 33vw;
  margin-left: 62vw;
`;

export const light = css`
  color: #444;
  background-color: #fafafa;
`;

export const dark = css`
  color: #fafafa;
  background-color: #444;
`;

export const Step = styled.div`
  padding-bottom: 50vh;
  opacity: 0.25;
  &.active {
    opacity: 0.9;
  }
  & div {
    padding: 25px 50px;
    line-height: 25px;
    font-size: 13px;
  }
  & img {
    width: 100%;
  }
`;

export const Sidebar = styled.nav`
  position: fixed;
  top: 5vw;
  bottom: 5vw;
  right: 0;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  z-index: 100;
  transition: all 0.15s ease-out 0;
`;
