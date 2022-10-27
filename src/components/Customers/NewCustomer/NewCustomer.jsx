import { useContext, useState } from "react";
import { AppContext } from "../../Products/Context";
import React from "react";
import "./newCustomer.css";

const NewCustomer = () => {
  const { insertCustomer } = useContext(AppContext);
  const [newCustomer, setNewCustomer] = useState({});

  const addNewCustomer = (e, field) => {
    setNewCustomer({
      ...newCustomer,
      [field]: e.target.value,
    });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    insertCustomer(newCustomer);
    e.target.reset();
  };

  return (
    <div className="newCustomer">
      <h1 className="addCustomerTitle">New Customer</h1>
      <form className="addCustomerForm" onSubmit={submitProduct}>
        <div className="addCustomerItem">
          <label>Tên khách hàng</label>
          <input
            type="text"
            id="_name"
            onChange={(e) => addNewCustomer(e, "tenKH")}
            placeholder="Nhập tên khách hàng"
            autoComplete="off"
            required
          />
        </div>
        <div className="addCustomerItem">
          <label>Địa chỉ</label>
          <input
            type="text"
            id="_name"
            onChange={(e) => addNewCustomer(e, "diaChi")}
            placeholder="Địa chỉ khách hàng"
            autoComplete="off"
            required
          />
        </div>
        <div className="addCustomerItem">
          <label>Số điện thoại</label>
          <input
            type="text"
            id="_name"
            onChange={(e) => addNewCustomer(e, "soDT")}
            placeholder="Số điện thoại"
            autoComplete="off"
            required
          />
        </div>
        <button className="addCustomerButton">Thêm khách hàng</button>
      </form>
    </div>
  );
}
export default NewCustomer;