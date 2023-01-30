import { BrowserRouter, Route, Routes } from "react-router-dom";
import SessionContext from "./hooks/SessionContext";
import Checkout from "./pages/Checkout";
import Header from "./layout/Header";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [session, setSession] = useState(null);
  return (
    <SessionContext.Provider value={{ ...session }}>
      <BrowserRouter>
        <Header {...{ setSession }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
}

export default App;
