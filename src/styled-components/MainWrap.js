import styled from "styled-components";

const MainWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1e3c72; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2a5298,
    #1e3c72
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2a5298,
    #1e3c72
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default MainWrap;
