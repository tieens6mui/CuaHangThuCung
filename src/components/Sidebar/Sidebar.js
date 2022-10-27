import React from 'react'
import "../Admin.css"
import { Link } from 'react-router-dom'
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from '@material-ui/icons/Mail';
import AssessmentIcon from "@material-ui/icons/Assessment";
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import PermMediaIcon from '@material-ui/icons/PermMedia';


function Sidebar() {
    return (<div className="Sidebar">
        <ul className="SidebarList">
            <Link to="/Admin" className="link">
            <li className="row" >
                <div className="icon"><HomeIcon /></div>
                <div className="title">Trang chủ</div>
            </li>
            </Link>
            <Link to="/Admin/Product">
            <li className="row">
                <div className="icon"><MailIcon /></div>
                <div className="title">Sản phẩm</div>
            </li>
            </Link>
            <Link to="/Admin/Customer">
            <li className="row">
                <div className="icon"><AssessmentIcon /></div>
                <div className="title">Khách hàng</div>
            </li>
            </Link>
            <li className="row">
                <div className="icon"><DashboardIcon /></div>
                <div className="title">Hóa đơn</div>
            </li>
           
            <li className="row">
                <div className="icon"><PermMediaIcon /></div>
                <div className="title">Báo cáo</div>
            </li>
        </ul>
    </div>
    );
}

export default Sidebar
