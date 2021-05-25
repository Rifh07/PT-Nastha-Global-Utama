import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../components/navbar'
import { home, addEvent, dashboard } from '../pages';

function routes() {
    return (
    <Router>
        <Switch>
            <div className="mb-5">
                <Navbar />
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <Route path="/" exact component={home} />
                        <Route path="/add-event" exact component={addEvent} />
                        <Route path="/dashboard" exact component={dashboard} />
                    </div>
                </div>
            </div>
        </Switch>
    </Router>
    )
}

export default routes
