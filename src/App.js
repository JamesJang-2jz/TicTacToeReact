import React  from 'react';

function Square() {
    return <button className="square">1</button>;
}

export default function Board() {
  return (
  <React.Fragment>
    <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
    </div>
    <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
    </div>
    <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
    </div>
  </React.Fragment>
  );
}
