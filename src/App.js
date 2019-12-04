import React,{Component} from 'react';

import {connect} from 'react-redux';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'

import Login from './views/login'
import NotFound from './views/NotFound'
import Admin from './views/admin'
class App extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={Admin}/>
                    <Redirect to="/login" from="/" exact />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}
const mapStateToPros=(state)=>{
    console.log(state)
    return {
        a:state.get('a')
    }
}

export default connect(mapStateToPros,null)(App)