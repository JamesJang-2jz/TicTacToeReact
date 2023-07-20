import React  from 'react';
import { useState } from 'react';

function Square() {
/** components use STATE/useState to remember if it was clicked
    -useState declares two variables, first is a state variable that holds current value of the state.
    second value (setValue) is used by the useState hook to update the state variable.
*/
    const [value, setValue] = useState(null);
    function handleClick () {
    setValue('X');
    }
    return <button className="square" /* onClick={() =>{ alert('clicked'); }}*/
    onClick={handleClick}>{value}</button>;
}

export default function Board() {
    const [square, setSquares] = useState(Array(9).fill(null));
  return (
  <React.Fragment>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board-row">
            <Square />
            <Square />
            <Square />
    </div>
    <div className="board-row">
            <Square />
            <Square />
            <Square />
    </div>
  </React.Fragment>
  );
}
