import React, { FC, useState } from "react";
import { Card, Divider } from "antd";
import "./Form.css";
import moment from "moment";
import { UserData } from "./Form";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";

interface Props {
  data: UserData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const FormDataView = (props: Props) => {
  // console.log(sendData);
  // let currentDate = new Date();

  const { data } = props;

  return (
    <>
      <div className="form__dataView">
        <h1>Your Data is Here </h1>
        <Divider style={{ margin: 0, backgroundColor: "gray" }} />

        {/* {data.forEach((item: UserData) => {
          return <>{item.name}</>;
        })} */}

        {data.map((item, index) => {
          return (
            <>
              <div className="Form__card__container " key={index}>
                <Card
                  hoverable
                  style={{
                    backgroundColor: item.switch
                      ? "rgb(217, 198, 235)"
                      : "white",
                  }}
                  title={
                    <>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "rgb(66, 66, 66)",
                        }}
                      >
                        {moment(item.addTime).format("MM-DD-YYYY, h:mm:ss a")}
                      </span>

                      <span style={{ float: "right", paddingLeft: "10px" }}>
                        <CloseOutlined
                          onClick={() => props.onDelete(index)}
                          className="Delete__Icon__hover"
                        />
                      </span>
                      <span style={{ float: "right" }}>
                        <EditOutlined
                          onClick={() => props.onEdit(index)}
                          className="Edit__Icon__hover"
                        />
                      </span>
                    </>
                  }
                  bordered={false}
                >
                  <p className="data__head">
                    Your Name is:
                    <span className="data">{item.name}</span>
                  </p>

                  <p className="data__head">
                    Your Email is:
                    <span className="data">{item.email}</span>
                  </p>
                  <p className="data__head">
                    Your Contact No. is:
                    <span className="data">{item.contact}</span>
                  </p>
                  <p className="data__head">
                    Your Gender is:
                    <span className="data">{item.gender}</span>
                  </p>
                  <p className="data__head">
                    Your Date of Birth is:
                    <span className="data">
                      {/* {moment = item.birthDay} */}

                      {item.date?.format("MM-DD-YYYY")}
                    </span>
                  </p>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FormDataView;
