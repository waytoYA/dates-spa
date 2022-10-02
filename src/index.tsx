import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HistoryDate from './context/HistoryDate';
import './interface/sass/main.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Date = createContext<any>(null)


root.render(
    <Date.Provider
    value= {{
      HistoryDate: new HistoryDate(),
    }}
    >
      
    <App />

    </Date.Provider>

);


