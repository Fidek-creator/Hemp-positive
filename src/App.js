import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
          <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
