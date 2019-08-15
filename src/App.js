import React,{ useEffect, useState} from 'react';
import Graph from "./components/Graph"
import Transactions from "./components/Transactions"
import {fetchApi} from "./api"

function App() {
  const [currentState, setState] = useState({loading: false, data:[]})
  
  useEffect(() => {
    setState({loading: true, data: null})
    fetchApi().then(
     result => {
        setState({loading: false, data:result})
      },
      error => {
        setState({loading: false, })
      },
    )
  }, [])

  return (
    <div >
      <header >
        <h1>Transactions for the past 7 days</h1>
<Graph/>
<Transactions/>
      </header>
    </div>
  );
}

export default App;
