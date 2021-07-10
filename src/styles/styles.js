import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const MapBoxMap = styled.div`
  top: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  pointer-events: none;

  .mapboxgl-popup {
    padding-bottom: 50px;s
  }

  .mapboxgl-popup-close-button {
    display: none;
  }

  .mapboxgl-popup-content {
    padding: 0;
    width: 180px;
    border-radius: 0;

    h3 {
      background: #444;
      color: #fff;
      margin: 0;
      display: block;
      padding: 10px;
      font-weight: 700;
    }

    h4 {
      margin: 0;
      display: block;
      padding: 10px;
      font-weight: 400;
    }
  }
`;

export const Header = styled.header`
  margin: 3vh auto;
  width: 90vw;
  padding: 2vh;
  text-align: center;
  position: relative;
  z-index: 100;
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

export const Marker = styled.div`
  border: none;
  cursor: pointer;
  height: 56px;
  width: 56px;
  /* background-image: url(marker.png); */
  background-color: rgba(0, 0, 0, 0);
  font-size: 22px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
`;
