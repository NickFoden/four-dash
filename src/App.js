import React, { useEffect, useState } from "react";
import Graph from "./components/Graph";
import Transactions from "./components/Transactions";
import { fetchApi } from "./api";

function App() {
  const [currentState, setState] = useState({
    loading: false,
    error: null,
    data: []
  });

  useEffect(() => {
    setState({ loading: true, error: false, data: [] });
    fetchApi().then(
      result => {
        setState({ loading: false, data: result });
      },
      error => {
        setState({ loading: false, error });
      }
    );
  }, []);
  return (
    <div>
      <header>
        <h1>Transactions for the past 7 days</h1>
        {currentState.error && <h5>{currentState.error}</h5>}
        <Graph data={currentState.data} />
        <Transactions data={currentState.data} />
      </header>
    </div>
  );
}

export default App;
