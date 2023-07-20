import React  from 'react';
import { useState } from 'react';

function Square({value}) {
/** components use STATE/useState to remember if it was clicked
    -useState declares two variables, first is a state variable that holds current value of the state.
    second value (setValue) is used by the useState hook to update the state variable.
*/
//    const [value, setValue] = useState(null);
//    function handleClick () {
//    setValue('X');
//    }
    return <button className="square" /* onClick={() =>{ alert('clicked'); }}*/
    /*onClick={handleClick}*/
    >{value}</button>;
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
  return (
  <React.Fragment>
    <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
    </div>
    <div className="board-row">
         <Square value={squares[3]}/>
         <Square value={squares[4]}/>
         <Square value={squares[5]}/>
    </div>
    <div className="board-row">
         <Square value={squares[6]}/>
         <Square value={squares[7]}/>
         <Square value={squares[8]}/>
    </div>
  </React.Fragment>
  );
}
