import React from 'react';
import {render} from 'react-dom';
import App from './App';


const rootElement = document.getElementById('root');

const renderApp = (Component)=>{
    return render(<Component />, rootElement)
};

renderApp(App);