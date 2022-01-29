import React from 'react';
import { Card, ContentWrap, Kanji, Hiragana } from './element';
import { useSelector, useDispatch } from 'react-redux';
import { OptionDiv } from './element';
import { removeWordFB, chkUpdateFB } from './redux/modules/word';
import { useHistory } from 'react-router-dom';
import { IoCheckmarkSharp, IoTrashSharp, IoClipboardSharp } from "react-icons/io5";

const Content = (props) => {
    const word_list = useSelector(state => state.word.list);
    const dispatch = useDispatch();
    const history = useHistory();

    const delWordBtn = (id) => {
        dispatch(removeWordFB(id));
    };

    return (
        <ContentWrap>
            {word_list.map((el, i) => {
                return (
                    <Card key={i} check={el.check}>
                        <Kanji>
                            {el.word}
                        </Kanji>
                        <Hiragana>
                            {el.hiragana}
                        </Hiragana>
                        <div>
                            {el.mean}
                        </div>
                        <OptionDiv>
                            <IoCheckmarkSharp onClick={() => dispatch(chkUpdateFB(el))}/>
                            <IoClipboardSharp onClick={() => history.push('/edit/' + el.id)}/>
                            <IoTrashSharp onClick={() => delWordBtn(el.id)}/>
                        </OptionDiv>
                    </Card>
                )
            })}
        </ContentWrap>
    );
}

export default Content;