import React from 'react';
import Card from './Card';
import './style.css';
import Data from './Data';

const nCard = (val) => {
  return <Card posterSrc={val.posterImg} title={val.sTitle} link={val.sLink} />;
};

function App() {
  return (
    <>
      <h1 className="heading">List of top Netflix Series</h1>
      <div className="CardContainer">{Data.map(nCard)}</div>
    </>
  );
}

export default App;
