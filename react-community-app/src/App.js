import './App.css';
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Container } from './components/container';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
