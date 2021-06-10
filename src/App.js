import logo from './utils/images/logo.svg';
import './App.css';
import Todo from './components/Todo';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';
import Title from './components/Title';
import GlobalStyles from './globalStyles';
function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Title/>
      <Todo/>
      <Cuerpo/>
      <Footer/>
    </div>
  );
}

export default App;
