import React, {useState} from "react";
import './styles/Square.css';

function Square(props) {
    const id = props.id;
    const updateText = props.click_func;
    var value = props.value;

    const [text, setText] = useState(null);

    function setHelper(value){
        setText(value);
    };

    return (
        <button className="square" onClick={updateText}>
            {text}
        </button>
    )
}

function helper(player, func){
    func(player);
}

export default Square;