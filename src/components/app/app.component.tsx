import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './app.component.css';
import "../../common/styles";

import Header from '../header/header.component';  
import About from '../pages/home/home.page';
import Home from '../pages/home/home.page';
import { ApolloProvider } from '@apollo/client';
import client from '../../common/apollo-client';
import PostsForm from '../posts/posts-form/posts-form.component';

const App: React.FC = ()=>{
    return(
        <ApolloProvider client={client}> 
        <Router> 
            <Header />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <PostsForm />
            </Switch>
        </Router>
        </ApolloProvider>
    );
}
 
export default App