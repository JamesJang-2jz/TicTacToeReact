import React  from 'react';
import { useState } from 'react';

function Square({value, onSquareClick }) {
/** components use STATE/useState to remember if it was clicked
    -useState declares two variables, first is a state variable that holds current value of the state.
    second value (setValue) is used by the useState hook to update the state variable.
*/
//    const [value, setValue] = useState(null);
//    function handleClick () {
//    setValue('X');
//    }
    return <button className="square" onClick={onSquareClick}>{value}</button>;
    /* onClick={() =>{ alert('clicked'); }}*/
    /*onClick={handleClick}*/
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
    nextSquares[i] = "X";
    }  else {
    nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    }
  return (
  <React.Fragment>
    <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
  </React.Fragment>
  );
}
