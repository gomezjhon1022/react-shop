import React from 'react';
import { BrowserRouter, Switch, Route} from 'reac-router-dom';
import Layout from '../containers/Layout';
import Password from '../containers/Password';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/password" component={Password}/>
                    <Route exact path="recovery-password" component={RecoveryPassword}/>
                    <Route component={NotFound} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;