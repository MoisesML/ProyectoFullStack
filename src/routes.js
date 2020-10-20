import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'

import LoginPage from './Views/LoginPage'
import ContactPage from './Views/ContactPage'
import RegisterPage from './Views/RegisterPage'
import ManagementPage from './Views/ManagementPage'
import EditPage from './Views/EditPage'
import CreatePage from './Views/CreatePage'
import TransManagPage from './Views/TransManagPage'
import CreateTransPage from './Views/CreateTransPage'

export default function routes() {
    return (
        <Fragment>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/contacto" component={ContactPage} />
            <Route exact path="/registro" component={RegisterPage} />
            <ProtectedRoute exact path="/management" component={ManagementPage} />
            <ProtectedRoute exact path="/management/edit/:id" component={EditPage} />
            <ProtectedRoute exact path="/management/create" component={CreatePage} />
            <ProtectedRoute exact path="/management/trans" component={TransManagPage} />
            <ProtectedRoute exact path="/management/transcreate" component={CreateTransPage} />
        </Fragment>
    )
}
