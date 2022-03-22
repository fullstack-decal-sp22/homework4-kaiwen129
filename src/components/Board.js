import React from "react";
import './styles/Board.css';
import Square from "./Square";
import { render } from "@testing-library/react";

function Board() {
    var currPlayer = 'X';
    const status = 'Next player: X';

    function renderSquare(id, func, value) {
        return <Square id={id} click_func={func} value={value}/>;
    }

    function updateText(){
      square1.setText('A');
      /*Square.setHelper(currPlayer);
      Square.setText(currPlayer);
      if(currPlayer === 'X'){
        currPlayer = 'O';
      }
      else{
        currPlayer = 'X';
      }*/
    }

    var square1 = renderSquare(1, updateText, 'X');

    return (  
        <div>
          <div className="board-row">
            {square1}
            {renderSquare(1, updateText, 'O')}
            {renderSquare(2, updateText, 'O')}
          </div>
          <div className="board-row">
            {renderSquare(3, updateText, 'O')}
            {renderSquare(4, updateText, 'O')}
            {renderSquare(5, updateText, 'O')}
          </div>
          <div className="board-row">
            {renderSquare(6, updateText, 'O')}
            {renderSquare(7, updateText, 'O')}
            {renderSquare(8, updateText, 'O')}
          </div>
          <div className="status">{status}</div>
        </div>
    )
}

export default Board;