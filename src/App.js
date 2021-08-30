import TodoMain from 'Pages/TodoMain';
import BackGround from 'Pages/BackGround';
import GlobalStyle from 'Styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoMain />
      <BackGround />
    </div>
  );
}

export default App;
