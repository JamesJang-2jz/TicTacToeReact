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
    if (squares[i] || calculateWinner(squares)) {
    return;
    }
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

function calculateWinner(squares){
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
        }
    }
    return null;
    }
