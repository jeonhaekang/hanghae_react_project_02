import './App.css'
import React from 'react';
import Nav from './Nav'
import Content from './Content';
import Insert from './Insert';
import { Wrap } from './element';
import { Route } from 'react-router-dom';
import { loadWordFB } from './redux/modules/word'
import { useDispatch } from 'react-redux';
import Edit from './Edit';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, [])


  return (
    <div>
      <Nav />
      <Wrap>
        <Route exact path="/">
          <Content />
        </Route>
        <Route exact path="/insert">
          <Insert />
        </Route>
        <Route exact path="/edit/:id">
          <Edit />
        </Route>
      </Wrap>
    </div>
  );
}

export default App;
