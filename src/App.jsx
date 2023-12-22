import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Header />
        <Routes>
          {routes.map((el) => (
            <Route {...el} key={el.path} />
          ))}
        </Routes>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
