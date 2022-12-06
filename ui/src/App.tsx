import React from 'react';
import logo from './logo.svg';
import { useQuery, gql } from '@apollo/client';
import './App.css';

const QUERY = gql`
query Query($exampleQueryId: ID!) {
  exampleQuery(id: $exampleQueryId) {
    id
  }
}
`
function App() {
  const opts = {
    variables: {
      "exampleQueryId": "638d1b2a1c13ce9e7bf5dcaf"
    }
  }
  const response = useQuery(QUERY, opts);
  console.log(response);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
