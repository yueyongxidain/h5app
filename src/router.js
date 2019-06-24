import React from 'react';
import richText from './routes/richText';
import { HashRouter, Route, Switch } from 'react-router-dom';

function Index() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/richText" component={richText} />
            </Switch>
        </HashRouter>
    )
}
export default Index