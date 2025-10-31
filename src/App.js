import Header from './components/Header';
import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'
import Menu from './components/Menu'


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      {/* <Hero /> */}
      <Footer />
    </div>
  );
}

export default App;
