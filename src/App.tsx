import React, { useState } from "react";
import "./App.css";
import Home from "./custom_menu/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import { Layout } from "antd";
import TodoPage from "./custom_menu/TodoPage";
import NavBar from "./custom_menu/NabBar";
import DataForm from "./custom_menu/Form";
import MyFooter from "./custom_menu/MyFooter";
import SideBar from "./custom_menu/SideBar";
import BreadCrumbs from "./custom_menu/BreadCrumbs";

const { Content } = Layout;

const App = () => {
  return (
    <>
      <div className="app">
        <Router>
          <Layout>
            <NavBar key="1" />

            <Layout>
              <SideBar />
              <Content style={{ padding: "0 50px" }}>
                <BreadCrumbs />

                <Switch>
                  <Route exact path="/todo-list">
                    <TodoPage />
                  </Route>

                  <Route exact path="/form">
                    <DataForm />
                  </Route>

                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Content>
            </Layout>

            <MyFooter />
          </Layout>
        </Router>
      </div>
    </>
  );
};

export default App;
