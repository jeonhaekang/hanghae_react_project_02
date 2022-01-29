import React from "react";
import { EditWrap } from "./element";
import { useDispatch } from "react-redux";
import { addWord, addWordFB } from "./redux/modules/word";
import { useHistory } from "react-router-dom";

const Insert = (props) => {
    const inputRef = React.useRef([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const insert = () => {
        const word = inputRef.current[0].value;
        const hiragana = inputRef.current[1].value;
        const mean = inputRef.current[2].value;

        const data = { word: word, hiragana: hiragana, mean: mean }
        dispatch(addWordFB(data));
        history.push('/');
    }

    return (
        <EditWrap>
            <h1>등록</h1>
            <div>
                단어<input ref={el => inputRef.current[0] = el} />
            </div>
            <div>
                히라가나<input ref={el => inputRef.current[1] = el} />
            </div>
            <div>
                의미<input ref={el => inputRef.current[2] = el} />
            </div>
            <button onClick={() => insert()}>단어 등록</button>
        </EditWrap>
    );
}

export default Insert;