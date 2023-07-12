import ReactDOM from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';

// STORE --> Global state
const store = configureStore({
    reducer: {
        user: userReducer,
    },
})

// ACTION -> Describe what you wanna do (just a name)

// REDUCER -> Desribe how actions trasform the state in the new state

// DISPATCH -> Execute the actions

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);