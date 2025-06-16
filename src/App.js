import './App.css';
import NavBar from "./Components/NavBar";
import Banner  from './Components/Banner';
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Projects/>
      <Skills />
    </div>
  );
}

export default App;
