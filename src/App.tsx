import React, { Suspense } from 'react';
import Header from './Header';
import Map from './Map';
import './App.css';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Header />
        <Map />
      </div>
    </Suspense>
  );
}

export default App;
