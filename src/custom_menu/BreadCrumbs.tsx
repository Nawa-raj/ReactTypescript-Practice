import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/todo-list">Todo List</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
