import * as React from "react";
import { Router } from "./router";
import "./global.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;