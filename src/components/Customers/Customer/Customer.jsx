import { useContext, useState } from "react";
import { AppContext } from "../Context";
import React from "react";
import '../../Style.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ProductList = () => {
    const {
        products,
        editModeProduct,
        cancelEditProduct,
        updateProduct,
        deleteProduct,
        productLength,
    } = useContext(AppContext);

    const [newProduct, setNewProduct] = useState({});


    // Storing users new data when they editing their info.
    const [newData, setNewData] = useState({});

    const saveBtn = () => {
        updateProduct(newData);
    };

    const updateNewData = (e, field) => {
        setNewData({
            ...newData,
            [field]: e.target.value,
        });
    };

    const handleInputForm = e => {
        e.preventDefault();
        let field = e.target.name;
        let value = e.target.value;
        console.log(field, value);
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
        console.log(newProduct);
        const formData = new FormData();
        formData.append('maPet', newProduct.maPet);
        formData.append('tenPet', newProduct.tenPet);
        formData.append('giaPet', newProduct.giaPet);
        formData.append('moTa', newProduct.moTa);
        formData.append('hinhPet', newProduct.hinhPet);
        console.log(formData.get('maPet'));
        console.log(formData.get('tenPet'));
        console.log(formData.get('giaPet'));
        console.log(formData.get('moTa'));
        console.log(formData.get('hinhPet'));
        var headers = {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }

        axios.post('http://localhost/doan/public/Product/update-sp.php', formData, headers)
            .then(function (response) {
                //handle success
                console.log(response)
                console.log("success")
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Cập nhật sản phẩm thành công',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch(function (response) {
                //handle error
                console.log(response)
                console.log("sorry")
            });
    };

    const enableEdit = (maPet, tenPet, giaPet, moTa, hinhPet) => {
        setNewProduct({ maPet, tenPet, giaPet, moTa, hinhPet });
        editModeProduct(maPet);
    };

    const deleteConfirm = (maPet) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((value) => {
            if (value.isConfirmed) {
                deleteProduct(maPet);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    };

    return !productLength ? (
        <div>
            <h1 className="tile-product">Danh sách sản phẩm</h1>
            <p>
                {productLength === null ? "Loading..." : "Please insert some users."}</p>
        </div>
    ) : (
        <div>
            <div className="add-product">
                <h1 className="tile-product">Danh sách sản phẩm</h1>
                <Link to="/Admin/AddProduct">
                    <li>Thêm sản phẩm</li>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá </th>
                        <th>Mô tả</th>
                        <th>Hình</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(({ maPet, tenPet, giaPet, moTa, hinhPet, isEditing }) => {
                        return isEditing === true ? (
                            <tr key={maPet}>
                                <td>
                                    {maPet}
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="_name"
                                        defaultValue={tenPet}
                                        name="tenPet"
                                        onChange={handleInputForm}
                                        placeholder="Nhập tên sản phẩm"
                                        autoComplete="off"
                                        required
                                    />
                                </td>
                                <td>
                              
                                    <input
                                        type="number"
                                        id="_name"
                                        name="giaPet"
                                        defaultValue={giaPet}
                                        onChange={handleInputForm}
                                        placeholder="Giá sản phẩm"
                                        autoComplete="off"
                                        required
                                    />
                                
                                 
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="_name"
                                        name="moTa"
                                        defaultValue={moTa}
                                        onChange={handleInputForm}
                                        placeholder="Mô tả sản phẩm ..."
                                        autoComplete="off"
                                        required
                                    />
                                </td>
                                <td>
                                    <img src={`/Product/images/${hinhPet}`} alt="" className="ima-pro" />
                                    <input
                                        type="file"
                                        id="_name"
                                        name="hinhPet"
                                        onChange={onChange}
                                        // accept="image/*"
                                        className="image-file"
                                        style={{ border: "none" }}
                                    >
                                    </input>
                                </td>
                                <td>
                                    <button className="btn green-btn" onClick={e => submitProduct(e)}>
                                        Save
                                    </button>
                                    <button
                                        className="btn default-btn"
                                        onClick={() => cancelEditProduct(maPet)}
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ) : (
                            <tr key={maPet}>
                                <td>{maPet}</td>
                                <td>{tenPet}</td>
                                <td>{giaPet}</td>
                                <td>{moTa}</td>
                                <td>
                                    <img src={`/Product/images/${hinhPet}`} alt="" className="ima-pro" />
                                    {hinhPet}
                                </td>
                                <td>
                                    <button
                                        className="btn default-btn"
                                        onClick={() => enableEdit(maPet, tenPet, giaPet, moTa, hinhPet)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn red-btn"
                                        onClick={() => deleteConfirm(maPet)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList; 