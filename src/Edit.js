import React from "react";
import { EditWrap } from "./element";
import { useDispatch } from "react-redux";
import { addWord, addWordFB, modifyWordFB, oneLoad } from "./redux/modules/word";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Edit = (props) => {
    const inputRef = React.useRef([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const param = useParams();
    let word = useSelector(state => state.word.list).find(a => a.id === param.id)
    

    const modify = () => {
        console.log("진입")
        const word = inputRef.current[0].value;
        const hiragana = inputRef.current[1].value;
        const mean = inputRef.current[2].value;

        const data = {id: param.id , word: word, hiragana: hiragana, mean: mean, check:false }
        dispatch(modifyWordFB(data));
        history.push('/');
    }

    return (
        <EditWrap>
            <h1>수정</h1>
            <div>
                단어<input 
                    defaultValue={word.word}
                    ref={el => inputRef.current[0] = el} 
                />
            </div>
            <div>
                히라가나<input 
                    defaultValue={word.hiragana}
                    ref={el => inputRef.current[1] = el}
                />
            </div>
            <div>
                의미<input
                    defaultValue={word.mean}
                    ref={el => inputRef.current[2] = el}
                />
            </div>
            <button onClick={modify}>단어 수정</button>
        </EditWrap>
    );
}

export default Edit;