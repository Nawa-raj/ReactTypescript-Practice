import React from "react";

import { Col, Row, Card, Tooltip, Divider } from "antd";
import {
  CloseOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  EditOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { TaskProps } from "./TodoPage";
import renderHTML from "react-render-html";

// const renderHTML = require("react-render-html");

interface Props {
  newTask: TaskProps[];
  // workingTask: TaskProps[];
  // completedTask: TaskProps[];
  removeTask: (id: number) => void;
  addToPrograssive: (id: number) => void;
  edit: (id: number) => void;
  addToCompleted: (id: number) => void;
  addToNewTask: (id: number) => void;
}

const TodoTaskView = (props: Props) => {
  const {
    newTask,
    removeTask,
    addToPrograssive,
    addToCompleted,
    addToNewTask,
    edit,
  } = props;
  return (
    <div>
      <Row gutter={24}>
        {/* New Task Sectoin */}
        <Col xs={24} md={12} lg={8}>
          <Divider style={{ color: "purple" }}>New Todo Lists</Divider>

          {newTask
            .filter((item) => item.taskStatus === "newTask")
            .map((x) => {
              return (
                <Card
                  hoverable
                  className="card__control"
                  key={x.id}
                  title={
                    <>
                      <span>{x.title}</span>

                      <span style={{ float: "right", paddingLeft: "10px" }}>
                        <Tooltip placement="top" title="Remove From Task">
                          <CloseOutlined
                            onClick={() => removeTask(x.id)}
                            className="Delete__Icon__hover"
                          />
                        </Tooltip>
                      </span>
                      <span style={{ float: "right", paddingLeft: "10px" }}>
                        <Tooltip title="Add to Prograssive" placement="top">
                          <DoubleRightOutlined
                            onClick={() => addToPrograssive(x.id)}
                            className="Edit__Icon__hover"
                          />
                        </Tooltip>
                      </span>
                      <span style={{ float: "right", paddingLeft: "10px" }}>
                        <Tooltip title="Edit" placement="top">
                          <EditOutlined
                            onClick={() => edit(x.id)}
                            className="Edit__Icon__hover"
                          />
                        </Tooltip>
                      </span>
                    </>
                  }
                  actions={[
                    <>
                      Added Date :
                      <span style={{ paddingLeft: "10px" }}>
                        {moment(x.addDate).format("MM-DD-YYYY, h:mm:ss a")}
                      </span>
                    </>,
                  ]}
                >
                  <>
                    <p className="due__dateControl">
                      Due Date: {moment(x.date).format("MM-DD-YYYY")}
                    </p>
                    <div style={{ padding: "inherit", overflow: "hidden" }}>
                      {renderHTML(x.task)}
                    </div>
                  </>
                </Card>
              );
            })}
        </Col>

        {/* Prograssive section  */}
        <Col xs={24} md={12} lg={8}>
          <Divider style={{ color: "purple" }}>InProgress Tasks</Divider>

          {newTask
            .filter((item) => item.taskStatus === "inProgressive")
            .map((x) => {
              return (
                <Card
                  hoverable
                  className="card__control"
                  key={x.id}
                  title={
                    <>
                      <span>{x.title}</span>

                      <span style={{ float: "right", paddingLeft: "10px" }}>
                        <Tooltip title="Add To Completed" placement="top">
                          <DoubleRightOutlined
                            onClick={() => addToCompleted(x.id)}
                            className="Edit__Icon__hover"
                          />
                        </Tooltip>
                      </span>
                      <span style={{ float: "right", paddingLeft: "10px" }}>
                        <Tooltip title="Add To NewTask" placement="top">
                          <DoubleLeftOutlined
                            onClick={() => addToNewTask(x.id)}
                            className="Edit__Icon__hover"
                          />
                        </Tooltip>
                      </span>
                    </>
                  }
                  actions={[
                    <>
                      Added Date :
                      <span style={{ paddingLeft: "10px" }}>
                        {moment(x.addDate).format("MM-DD-YYYY, h:mm:ss a")}
                      </span>
                    </>,
                  ]}
                >
                  <>
                    <p className="due__dateControl">
                      Due Date: {moment(x.date).format("MM-DD-YYYY")}
                    </p>
                    <div style={{ float: "left" }}>{renderHTML(x.task)}</div>
                  </>
                </Card>
              );
            })}
        </Col>

        {/* Completed section  */}
        <Col xs={24} md={12} lg={8}>
          <Divider style={{ color: "purple" }}>Completed Tasks</Divider>

          {newTask
            .filter((item) => item.taskStatus === "completed")
            .map((x) => {
              return (
                <Card
                  className="card__control"
                  key={x.id}
                  title={
                    <>
                      <span>{x.title}</span>
                    </>
                  }
                  actions={[
                    <>
                      Added Date :
                      <span style={{ paddingLeft: "10px" }}>
                        {moment(x.addDate).format("MM-DD-YYYY, h:mm:ss a")}
                      </span>
                    </>,
                  ]}
                >
                  <>
                    <p className="due__dateControl">
                      Due Date: {moment(x.date).format("MM-DD-YYYY")}
                    </p>
                    <div style={{ float: "left" }}>{renderHTML(x.task)}</div>
                  </>
                </Card>
              );
            })}
        </Col>
      </Row>
    </div>
  );
};

export default TodoTaskView;
