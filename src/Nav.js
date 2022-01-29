import React from 'react';
import { Navi,Title } from './element';
import { useHistory } from 'react-router-dom';
import { EditButton } from './element';
import { IoAdd } from "react-icons/io5";

const Main = (props) => {
    const history = useHistory();
    return (
        <Navi>
            <Title>ハンへ日本語</Title>
            <EditButton onClick={()=>history.push("/insert")}><IoAdd/></EditButton>
        </Navi>
    );
}

export default Main;