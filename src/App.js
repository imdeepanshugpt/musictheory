import "./App.css";
import Header from "./components/Navbar";
import Scales from "./components/Scales";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Scales />
      </div>
      <Footer />
    </div>
  );
}

export default App;
