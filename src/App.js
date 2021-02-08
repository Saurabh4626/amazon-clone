import React,{useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const listener=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user loged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }
      else{
        //user logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    return()=>{
      listener();
    }
  }, [])
  console.log('user',user)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
