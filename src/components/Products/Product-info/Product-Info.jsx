import React, { Component , useState }  from 'react'
import { Link } from 'react-router-dom'
import './Product-Info.css'
import Quantity  from './Quantity-btn'
import { ReactNativeNumberFormat } from './ReactNativeNumberFormat'

export default class ProductInfo extends Component {

    constructor(props) {
        super(props);
        this.state = { product: [] };
    }

    componentDidMount() {
        const id = this.props.match.params.productId;
        fetch("http://localhost/doan/public/Product/info-sp.php", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({maPet: id})
          }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            if (data.success) {
                this.setState({ product: data.product })
            }
        console.log(data)
        }).catch((err) => {
            console.log(err);
        });
    }


    render() {
        return (
            <div>
                <div className="hero_area">
                    <div className="hero_social">
                        <a href>
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        <a href>
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                        <a href>
                            <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        <a href>
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                    </div>
                    {/* header section stats */}
                    <header className="header_section">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <Link to='/' className="navbar-brand" >
                                    <span>G-Gundam</span>
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className> </span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link to='/' className="nav-link" >
                                                Trang chủ <span className="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/Product' className="nav-link" >
                                                {" "}
                                                Sản phẩm{" "}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/About' className="nav-link" >
                                                {" "}
                                                About{" "}
                                            </Link >
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/ContactUs' className="nav-link">
                                                Liên hệ
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="user_option-box">
                                        <button>
                                            <i className="fa fa-user" aria-hidden="true" />
                                        </button>
                                        <Link to="/Cart">
                                            <button>
                                                <i className="fa fa-cart-plus" aria-hidden="true" />
                                            </button>
                                        </Link>
                                        <button>
                                            <i className="fa fa-search" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                    {/* end header section */}
                    {/* slider section */}
                    <section className="slider_section ">
                        <div
                            id="customCarousel1"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="detail-box">
                                                    <h1>Smart Watches</h1>
                                                    <p className="p-header">
                                                        Aenean scelerisque felis ut orci condimentum
                                                        laoreet. Integer nisi nisl, convallis et augue sit
                                                        amet, lobortis semper quam.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href className="btn1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="img-box">
                                                    <img src="images/gundam-slider.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="detail-box">
                                                    <h1>Smart Watches</h1>
                                                    <p className="p-header">
                                                        Aenean scelerisque felis ut orci condimentum
                                                        laoreet. Integer nisi nisl, convallis et augue sit
                                                        amet, lobortis semper quam.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href className="btn1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="img-box">
                                                    <img src="images/gundam-slider2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="detail-box">
                                                    <h1>Smart Watches</h1>
                                                    <p className="p-header">
                                                        Aenean scelerisque felis ut orci condimentum
                                                        laoreet. Integer nisi nisl, convallis et augue sit
                                                        amet, lobortis semper quam.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href className="btn1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="img-box">
                                                    <img src="images/gundam-slider3.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel1" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#customCarousel1" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>
                    {/* end slider section */}
                </div>
                <h1 className="info-title">Thông tin sản phẩm</h1>
                <div className="container">
                <div className="row">
                <div className="col-sm-2 col-md-3 col-lg-4  ">
                    <div className="product-image">
                        <img src={`/Product/images/${this.state.product.hinhPet}`} alt="" className="ima-pro" />
                    </div>
                </div>
                <div class="col-sm-4 col-md-6 col-lg-8   ">
                    <div className="product-info">
                        <div className="product-name">
                            <h2>{this.state.product.tenPet}</h2>
                            <span>Mã sản phẩm: {this.state.product.maPet}</span>
                        </div>
                        <div className="product-price">
                            <span>
                                Giá:    
                                <ReactNativeNumberFormat value={this.state.product.giaPet} />
                            </span>
                        </div>
                        <div className="number-product">
                            <div className="row">
                                <div className="button-add">
                                    <Quantity />
                                    <button className="btn-add">Thêm vào giỏ</button>
                                </div>
                            </div>
                        </div>
                        <ul class="infoList-deliverly">
                            <li>
                                <span>
                                    <img src="https://file.hstatic.net/1000397797/file/delivery-ico1_f26631929e1b41dab022d9960006297c.svg" alt="Hàng chất lượng cao" />
                                </span>
                                Hàng chất lượng cao
                            </li>
                            <li>
                                <span>
                                    <img src="https://file.hstatic.net/1000397797/file/delivery-ico2_5ea2de2f279b4dbfa10fcb9b9c448b4d.svg" alt="Vận chuyển toàn quốc" />
                                </span>
                                Vận chuyển toàn quốc
                            </li>
                            <li>
                                <span>
                                    <img src="https://file.hstatic.net/1000231532/file/mastercard_visa_nshop_b52d53ac69a545b2a8fd4d3f190374cc.png" alt="Miễn phí cà thẻ" />
                                </span>
                                Miễn phí cà thẻ
                            </li>
                        </ul>
                        <div className="nav-tab">
                            <ul className="nav nav-tabs|pills" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Chi tiết sản phẩm</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Bình luận</button>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> {this.state.product.moTa}</div>
                                <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">bình luận</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                <footer className="footer_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 footer-col">
                                <div className="footer_detail">
                                    <h4>About</h4>
                                    <p>
                                        Necessary, making this the first true generator on the
                                        Internet. It uses a dictionary of over 200 Latin words,
                                        combined with
                                    </p>
                                    <div className="footer_social">
                                        <a href>
                                            <i className="fa fa-facebook-square" aria-hidden="true" />
                                        </a>
                                        <a href>
                                            <i className="fa fa-twitter-square" aria-hidden="true" />
                                        </a>
                                        <a href>
                                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                                        </a>
                                        <a href>
                                            <i className="fa fa-instagram-square" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 footer-col">
                                <div className="footer_contact">
                                    <h4>Reach at..</h4>
                                    <div className="contact_link_box">
                                        <a href>
                                            <i className="fa fa-map-marker" aria-hidden="true" />
                                            <span>Location</span>
                                        </a>
                                        <a href>
                                            <i className="fa fa-phone" aria-hidden="true" />
                                            <span>Call +01 1234567890</span>
                                        </a>
                                        <a href>
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            <span>demo@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 footer-col">
                                <div className="footer_contact">
                                    <h4>Subscribe</h4>
                                    <form action="#">
                                        <input type="text" placeholder="Enter email" />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 footer-col">
                                <div className="map_container">
                                    <div className="map">
                                        <div id="googleMap" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-info">
                            <p>
                                © <span id="displayYear" /> All Rights Reserved By
                                <a href="https://html.design/">Free Html Templates</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
