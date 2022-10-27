import React from 'react'
import Product from './Product/Product'
import { ActionsProduct } from "./Action"
import { Provider } from "./Context";
import '../Style.css'

function ProductList(){
  const dataProducts = ActionsProduct();
      return (
        <Provider value={dataProducts}>
        <div className="Apps">
          <div className="wrapper">
            <section className="left-side">
            </section>
            <section className="right-side">
              <Product />
            </section>
          </div>
        </div>
      </Provider>
        );
  }
  export default ProductList;