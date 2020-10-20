import React from "react";
import Routes from "./routes";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import Navegacion from "./Components/Navegacion";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Navegacion />
        <div className=" container mt-8">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
