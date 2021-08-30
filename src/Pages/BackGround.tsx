import styled from 'styled-components';

function BackGround() {
  return <AppBackGround />;
}

const AppBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('https://cdn.pixabay.com/photo/2015/06/21/23/53/subtle-817155_960_720.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(1rem);
  -webkit-filter: blur(1rem);
  opacity: 0.7;
  z-index: -1;
`;

export default BackGround;
