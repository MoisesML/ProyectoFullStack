import React, { useContext, Fragment } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute({component:Component, ...rest}) {

    const { user } = useContext(AuthContext);

    return (
        <Fragment>
            {
                user !== null ? (
                    <Route {...rest} render={(props) => <Component {...props} />} />
                ):(
                    <Redirect to="/" />
                )
            }
        </Fragment>
    )
}
