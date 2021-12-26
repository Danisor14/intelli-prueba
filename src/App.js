import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}> 
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Provider> 
    </BrowserRouter>
  );
}

export default App;
