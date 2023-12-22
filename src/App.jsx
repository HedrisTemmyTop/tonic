import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app">
      <Header />
      {/*
       */}
      <Home />
      <Footer />
    </main>
  );
}

export default App;