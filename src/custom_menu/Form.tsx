import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Switch,
  Row,
  Col,
  Divider,
} from "antd";
import FormDataView from "./FormDataView";
import moment, { Moment } from "moment";

export interface UserData {
  name: string;
  email: string;
  contact: number;
  gender: string;
  date?: Moment;
  addTime?: Moment;
  switch: boolean;
}

const DataForm = () => {
  const [dataList, setDataList] = useState<UserData[]>([]);
  const [switchStatus, setSwitchStatus] = useState<boolean>();

  const [form] = Form.useForm();

  const [showForm, setShowForm] = useState<boolean>(false);

  const time = new Date();

  const onFinish = (values: any) => {
    // values.date;
    //setData({ ...data, name: values.fname });
    //Index State => Splice -> index ma add

    if (values.switch == undefined) values.switch = false;

    // setData({ ...data, ...values, addTime: time });

    setDataList([...dataList, { ...values, addTime: time }]);

    setShowForm(true);

    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed : ", errorInfo);
  };

  return (
    <>
      <Row>
        <Col xs={24} md={11}>
          <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 12 }}
            layout="horizontal"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <h1> Please Fill Data</h1>
            <Form.Item label="Name" name="name">
              <Input type="text" />
              {/* //defaultValue="Nawaraj Jaishi" */}
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>

            <Form.Item label="Contact" name="contact">
              <InputNumber type="Number" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item label="Gender" name="gender">
              <Select placeholder="Select Your Gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
                <Select.Option value="other">Other</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Date of Birth" name="date">
              <DatePicker />
            </Form.Item>

            <Form.Item label="Switch" name="switch" valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <div className="divider__controll">
          <Divider
            type="vertical"
            style={{ height: "400px", backgroundColor: "green" }}
          />
        </div>
        {showForm ? (
          <Col xs={24} md={12}>
            <FormDataView
              data={dataList}
              onEdit={(index: number) => {
                // setUpdateIndex(index);
                // dataList.filter((dataList, index) =>{
                //   setDataList([...dataList])
                // })

                // console.log(form.getFieldValue(["switch"]));

                form.setFieldsValue(dataList[index]);

                const newdata = dataList.filter((dataItem, inde) => {
                  if (index !== inde) return dataItem;
                });

                // console.log(newdata);
                setDataList(newdata);
              }}
              onDelete={(index: number) => {
                const newdata = dataList.filter((dataItem, inde) => {
                  if (index !== inde) return dataItem;
                });

                // console.log(newdata);
                setDataList(newdata);
              }}
            />
          </Col>
        ) : null}
      </Row>
    </>
  );
};

export default DataForm;
