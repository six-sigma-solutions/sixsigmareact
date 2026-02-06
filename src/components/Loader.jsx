import styled from "styled-components";

function Loader() {
  return (
    <Overlay role="status" aria-label="Loading">
      <div className="cube-loader">
        <div className="cube cube1" />
        <div className="cube cube2" />
        <div className="cube cube3" />
        <div className="cube cube4" />
      </div>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  .cube-loader {
    position: relative;
    width: 48px;
    height: 48px;
  }

  .cube {
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: #14b8a6; /* teal */
    border: 2px solid #ffffff;
    animation: foldCube 2.4s infinite linear;
  }

  .cube1 {
    top: 0;
    left: 0;
    transform-origin: 100% 100%;
    animation-delay: 0.3s;
  }

  .cube2 {
    top: 0;
    right: 0;
    transform-origin: 0 100%;
    animation-delay: 0.6s;
  }

  .cube3 {
    bottom: 0;
    right: 0;
    transform-origin: 0 0;
    animation-delay: 0.9s;
  }

  .cube4 {
    bottom: 0;
    left: 0;
    transform-origin: 100% 0;
    animation-delay: 1.2s;
  }

  @keyframes foldCube {
    0%,
    10% {
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    }
    25%,
    75% {
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    }
    90%,
    100% {
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }
`;

export default Loader;
