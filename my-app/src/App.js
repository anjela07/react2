import './App.css';
import { MainPage } from './Main';
import {Second} from './Second'
import { ThirdPage } from './Third';
import { BluePage } from './Blue';
import { FooterPage } from './Footer';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <Second/>
      <ThirdPage/>
      <BluePage/>
      <FooterPage/>
    </div>
  );
}

export default App;
