import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsContext from "./hooks/ProductsContext";
import SessionContext from "./hooks/SessionContext";
import Checkout from "./pages/Checkout";
import Header from "./layout/Header";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [session, setSession] = useState(null);
  const [library, setLibrary] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  function updateSession(login) {
    localStorage.setItem("session", JSON.stringify(login));
    setSession(login);
  }

  useEffect(() => {
    const localSession = localStorage.getItem("session");
    if (localSession) setSession(JSON.parse(localSession));
  }, []);

  return (
    <SessionContext.Provider value={{ ...session, setSession: updateSession }}>
      <ProductsContext.Provider
        value={{ cart, setCart, products, setProducts, library, setLibrary }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </ProductsContext.Provider>
    </SessionContext.Provider>
  );
}

export default App;
