import { useContext, useState } from "react";
import { AppContext } from "../Context";
import React from "react";
import "./newProduct.css";
import axios from 'axios';
import Swal from "sweetalert2";

const NewProduct = () => {
  const { insertProduct } = useContext(AppContext);
  const [newProduct, setNewProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const addNewProduct = (e, field) => {
    if (field === 'hinhPet') {

      setNewProduct({
        ...newProduct,
        [field]: e.target.files[0],
      });
    } else {
      setNewProduct({
        ...newProduct,
        [field]: e.target.value,
      });
    }
  };

  const handleInputForm = e => {
    e.preventDefault();
    let field = e.target.name;
    let value = e.target.value;
    setNewProduct({ ...newProduct, [field]: value });
  }

  const onChange = e => {
    e.preventDefault();
    let field = e.target.name;
    let value = e.target.files[0];
    setNewProduct({ ...newProduct, [field]: value });
  }

  const submitProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('tenPet', newProduct.tenPet);
    formData.append('giaPet', newProduct.giaPet);
    formData.append('moTa', newProduct.moTa);
    formData.append('hinhPet', newProduct.hinhPet);
    var headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }

    axios.post('http://localhost/doan/public/Product/add-sp.php', formData, headers)
      .then(function (response) {
        //handle success
        console.log(response)
        console.log("success")
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thêm sản phẩm thành công',
          showConfirmButton: false,
          timer: 2000
        })
      })
      .catch(function (response) {
        //handle error
        console.log(response)
        console.log("sorry")
      });
    // insertProduct(newProduct);
    // e.target.reset();
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <div className="container">
        <form className="addProductForm">

          <div className="addProductItem">

            <label>Tên sản phẩm</label>
            <input
              type="text"
              id="_name"
              // onChange={(e) => addNewProduct(e, "tenSP")}
              name="tenPet"
              onChange={handleInputForm}
              placeholder="Nhập tên sản phẩm"
              autoComplete="off"
              required
            />
          </div>


          <div className="addProductItem">
            <label>Giá sản phẩm</label>
            <input
              type="number"
              id="_name"
              // onChange={(e) => addNewProduct(e, "giaSP")}
              name="giaPet"
              onChange={handleInputForm}
              placeholder="Giá sản phẩm"
              autoComplete="off"
              required
            />
          </div>

          <div className="addProductItem">
            <label>Mô tả</label>
            <input
              type="text"
              id="_name"
              // onChange={(e) => addNewProduct(e, "moTa")}
              name="moTa"
              onChange={handleInputForm}
              placeholder="Mô tả sản phẩm ..."
              autoComplete="off"
              required
            />
          </div>

          <div className="addProductItem">
            <label>Hình sản phẩm</label>
            <input
              type="file"
              id="_name"
              name="hinhPet"
              onChange={onChange}
            />
          </div>

          <button className="addProductButton" onClick={e => submitProduct(e)}>Thêm sản phẩm</button>
        </form>
      </div>
    </div>
  );
}
export default NewProduct;