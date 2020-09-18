import React from "react";
import { useHooks } from "./components/hooks";
import Demo from "./components/set-map";
import "./styles.css";

export default function App() {
  const state = useHooks();
  return (
    <div className="App">
      <h1>Hello {state.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Demo />
    </div>
  );
}
