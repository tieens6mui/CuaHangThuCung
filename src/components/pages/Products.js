import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ReactNativeNumberForMat} from '../Products/Product/ReactNativeNumberFormat';
import '../Cards.css';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {product: []};
    }
    

    componentDidMount() {
        fetch("http://localhost/doan/public/Product/all-sp.php").then((res) => {return res.json();}).then((data) => {
            if (data.success) {
                this.setState({product: data.products})
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    showProduct(){
        const dt= this.state.product.map((tt) => {
            return(

                <div className="col-lg-3 col-md-6 col-12 ">
                <div className="cards-item" key={tt.maPet} style={{borderStyle:"solid",borderWidth: "thin",shadow: "1", margin:"10px", marginTop:"10px"}}>
                 <div className="img-box" key={tt.maPet}>
                      <img className="img-box1" src={`/Product/images/${tt.hinhPet}`} alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" style={{fontSize:"20px"}}>{tt.tenPet}</h5>
                        <h4 class="card-title1" style={{fontSize:"20px"}}>{tt.moTa}</h4>
                        <p class="card-text">Price:<a style={{color:"red"}}> {tt.giaPet} USD</a></p>
                        <a href="/cart" className="btn btn-primary" style={{backgroundColor:"black", borderRadius:"none"}}>ADD TO CART</a>
                    </div>
                </div>
                </div>
            );
        });
        return dt;
    }
    render(){
        return(
            <div className="container">
           <div className= "col-md-12">
                <div className="row">
                    {this.showProduct()}
                </div>
            </div>  
            </div>

        );
    }
}