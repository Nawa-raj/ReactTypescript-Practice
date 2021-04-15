import React, { useState } from "react";
import {
  Form,
  Button,
  Input,
  Col,
  Row,
  DatePicker,
  Tooltip,
  Modal,
} from "antd";
import { Moment } from "moment";
import { PlusOutlined } from "@ant-design/icons";
import TodoTaskView from "./TodoTaskView";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import uuid from "react-uuid";

export interface TaskProps {
  id: number;
  title: string;
  task: string;
  taskStatus: "newTask" | "inProgressive" | "completed";
  date?: Moment;
  addDate?: Moment;
}

const layout = {
  labelCol: { xs: 8, md: 6, lg: 3 },
  wrapperCol: { xs: 24, md: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 20 },
  // wrappRow: { span: 4 },
};

const { TextArea } = Input;

const TodoPage = () => {
  const [newTask, setNewTask] = useState<TaskProps[]>([]);
  const [workingTask, setWorkingTask] = useState<TaskProps[]>([]);
  const [completedTask, setCompletedTask] = useState<TaskProps[]>([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quillData, setQuillData] = useState<string>("");

  // console.log(newTask);

  const uid = uuid();
  // console.log("This is ID", uid);

  // ------- Form Control Secton Start ------
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const date = new Date();
    //if (!task)
    if (!values) {
      onFinishFailed("please Enter New task");
    } else
      setNewTask([
        ...newTask,
        { ...values, addDate: date, id: uid, taskStatus: "newTask" },
      ]);

    form.resetFields();
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed : ", errorInfo);
  };
  // ------- Form Control Section End ------

  // ------- Task Management Section Start ------
  const removeTask = (index: number) => {
    // console.log("index is here : ", index);

    const fildered = newTask.filter((item) => item.id !== index);
    setNewTask(fildered);
  };
  // console.log("filter out item: ", newTask);

  const addToPrograssive = (id: number) => {
    // console.log("you clicked me bro🤣🤣🤣🤣🤣");
    var task = [...newTask.filter((x) => x.id != id)];

    // console.log("filtered out task : ", task);
    var item = newTask.filter((x) => x.id == id)[0];

    // console.log(item);
    item.taskStatus = "inProgressive";

    console.log(item);

    task = [...task, item];
    // console.log(setNewTask(task));
  };

  const edit = (id: number) => {
    form.setFieldsValue(newTask[id]);

    setIsModalVisible(true);
  };

  const addToNewTask = (id: number) => {
    var task = [...newTask.filter((x) => x.id != id)];

    // console.log("filtered out task : ", task);
    var item = newTask.filter((x) => x.id == id)[0];

    // console.log(item);
    item.taskStatus = "newTask";

    task = [...task, item];
    console.log(setNewTask(task));
  };

  const addToCompleted = (id: number) => {
    var task = [...newTask.filter((x) => x.id != id)];

    // console.log("filtered out task : ", task);
    var item = newTask.filter((x) => x.id == id)[0];

    // console.log(item);
    item.taskStatus = "completed";

    task = [...task, item];
    console.log(setNewTask(task));
  };
  //------- Task Management Section End ------

  //------- Modal Setting Section Start ------
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //------- Modal Setting Section End ------

  return (
    <div>
      <Row style={{ paddingBottom: "20px" }}>
        <Col
          span={18}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1 style={{ paddingTop: "5px" }}>
            You Have {newTask.length} Tasks Now
          </h1>
          <Tooltip title="Add New Task">
            <Button
              shape="circle"
              icon={<PlusOutlined />}
              size={"large"}
              onClick={showModal}
            />
          </Tooltip>
        </Col>
      </Row>

      {/* ---------Modal Start--------- */}
      <Modal
        title="Add New Task"
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        // bodyStyle={{ height: "400px" }}
      >
        <Form
          // {...layout}
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            // {...itemLay}
            label="Task Title"
            name="title"
            rules={[{ required: true, message: "Please Enter Task Title" }]}
          >
            <Input size="middle" allowClear />
          </Form.Item>

          <Form.Item
            label="Task Details"
            name="task"
            rules={[{ required: true, message: "Please Enter New Task" }]}
            valuePropName="ReactQuill"
          >
            <ReactQuill
              placeholder="Task Details"
              scrollingContainer={"true"}
              style={{ height: "100px", marginBottom: "40px" }}

              // onChange={(value) => {
              //   setQuillData(value);
              // }}editor.getContents()
            />
            {/* <TextArea rows={4} /> */}
          </Form.Item>

          <Form.Item
            label="Due Date "
            name="date"
            rules={[{ required: true, message: "Please Select Date" }]}
            style={{ marginTop: "20px" }}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item {...tailLayout} style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit">
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* ----------Todo Task View Section Start------------*/}
      <div>
        <TodoTaskView
          newTask={newTask}
          removeTask={(id) => {
            removeTask(id);
          }}
          addToPrograssive={(id) => {
            addToPrograssive(id);
          }}
          edit={(id) => {
            edit(id);
          }}
          addToCompleted={(id) => {
            addToCompleted(id);
          }}
          addToNewTask={(id) => {
            addToNewTask(id);
          }}
        />
      </div>
      {/* ----------Todo Task View Section End------------*/}
    </div>
  );
};

export default TodoPage;
