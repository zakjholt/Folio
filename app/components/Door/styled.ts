import styled from "styled-components";

import zakImg from "../../images/zak.png";

export const Container = styled.div<{ canClick: boolean }>`
  padding: 15px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  font-family: "Bungee Inline";
  font-style: italic;
  line-height: 1;
  color: #222;

  ${props => props.canClick && "cursor: pointer;"}
`;

export const BigText = styled.div`
  font-size: 55px;
`;

export const SlantText = styled.div`
  font-size: 25px;
  margin-left: 200px;
  color: #444;
`;

export const TinyDoorFrame = styled.div`
  width: 200px;
  height: 300px;
  position: absolute;
  bottom: 0px;
  right: 100px;
  border: 10px solid maroon;
  border-radius: 15px;
`;

export const TinyDoor = styled.div<{ knocks: number }>`
  position: relative;
  width: 100%;
  height: 100%;

  border: 2px solid #555;
  box-shadow: 0 0 1px 1px rgba(100, 100, 100, 0.3);
  border-radius: 5px;
  border-bottom: none;

  cursor: grabbing;
  user-select: none;
  transition: transform 0.2s ease-in-out;
  transform-origin: center right;
  background: white;

  ${props =>
    props.knocks > 0 ? `transform: rotateY(${props.knocks * 20}deg)` : ""}
`;

export const Sign = styled.div`
  font-family: "Roboto";
  position: absolute;
  position: absolute;
  padding: 15px;
  transform: rotate(30deg);
  top: 10%;
  right: 5%;
  background: maroon;
  color: white;
  border-radius: 2px;
  box-shadow: 0 0 1px 1px rgba(155, 55, 55, 0.3);
`;

export const Handle = styled.div`
  position: absolute;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  top: 45%;
  left: 5px;
  background: silver;
  box-shadow: 0 0 1px 1px rgba(200, 200, 200, 0.4);
`;

export const Zak = styled.div<{ show: boolean }>`
  background-image: url(${zakImg});
  width: 200px;
  height: 300px;
  right: -30px;
  top: -30px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  transition: transform 0.5s ease-in-out;

  ${props => props.show && "transform: rotate(-30deg) translateX(-30px)"}
`;

export const TextBlurbContainer = styled.div`
  position: absolute;
  bottom: 350px;
  right: 300px;
`;
