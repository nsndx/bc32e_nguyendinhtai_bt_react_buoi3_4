import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
   render() {
      const { data, xemChiTiet } = this.props
      return (
         <div className="row">
            {data.map(sanPham => {
               return <div className="col-xl-4 col-md-6 mb-3" key={sanPham.id}>
                  <ProductItem sanPham={sanPham} xemChiTiet={xemChiTiet} />
               </div>
            })}
         </div>
      )
   }
}
