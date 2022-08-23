import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import NewPassword from '../pages/NewPassword';
import SendEmail from '../pages/SendEmail';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import AppContext from '../context/AppContext';
import unseInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const App = () => {
    const initialState = unseInitialState();
    return (
        <AppContext.Provider value={initialState} >
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/password-recovery" element={<PasswordRecovery />} />
                        <Route path="*" element={<NotFound />} />
                        <Route exact path="/send-email" element={<SendEmail />} />
                        <Route exact path="/new-password" element={<NewPassword />} />
                        <Route exact path="/account" element={<MyAccount />} />
                        <Route exact path="/signup" element={<CreateAccount />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route exact path="/orders" element={<Orders />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
	);
}

export default App;