import styled from "styled-components";

const HomeWrap = styled.div`
  background-color: #003545;
  position: relative;
  .neon-wrap {
    position: relative;
    animation: a1 2s ease-in-out 0s infinite;
    font-family: "Monoton", cursive;
    font-size: 5em;
    text-align: left;
    color: #ed6363;

    padding: 40px;

    text-shadow: 0px 0px 100px #ed6363;
    letter-spacing: 7px;
  }
  /* "крепления" под буквы */

  .iframe {
    background-color: #222;
    border-radius: 7px;
  }
  .blink {
    display: inline-block;
    animation: blink 2s ease-in-out 0s infinite;
  }
  .blink1 {
    animation: blink 2s ease-in-out 2.3s infinite;
  }
  .down {
    animation: spin 1s ease-in-out both 1s 1;
    top: 20px;
  }
  .spin {
    animation: down 1s ease-in-out both 1s 1;
  }
  .off {
    opacity: 0.8;
    animation: off 3s ease-in-out forwards 2s 1;
  }
  /*смещение вправо последних 4 букв*/
  .r {
    left: 105px;
  }
  /*мигание j и o*/
  @keyframes blink {
    19.999%,
    22%,
    62.999%,
    64%,
    64.999%,
    70%,
    100% {
      opacity: 0.3;
    }
    0%,
    12%,
    18.999%,
    23%,
    31.999%,
    37%,
    44.999%,
    46%,
    49.999%,
    51%,
    58.999%,
    61%,
    68.999%,
    71%,
    85.999%,
    96%,
    100% {
      opacity: 0.8;
    }
  }
  /*отклчение послдней буквы*/
  @keyframes off {
    0%,
    15.999%,
    61%,
    85.999%,
    95% {
      color: #ed6363;
    }
    16%,
    19%,
    60.999%,
    86%,
    93%,
    100% {
      color: #ed6363;
    }
  }
  /*падение буквы а*/

  /*поворот буквы а при падении*/
`;

export default HomeWrap;
