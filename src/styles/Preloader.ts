import styled from "styled-components";

export const Preloader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  
  svg {
      animation: preloader-rotate 1.5s infinite linear;
  }

  @keyframes preloader-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`