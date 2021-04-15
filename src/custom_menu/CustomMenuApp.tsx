import React, { useState } from "react";
import "./style.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import { Layout } from "antd";
import TodoPage from "./TodoPage";
import NavBar from "./NabBar";
import DataForm from "./Form";
import MyFooter from "./MyFooter";
import SideBar from "./SideBar";
import BreadCrumbs from "./BreadCrumbs";

const { Content } = Layout;

const CustomMenuApp = () => {
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

export default CustomMenuApp;
