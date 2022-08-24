import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'
import data from './data.json'


export default class ShoesStore extends Component {
   state = {
      sanPham: {}
   }
   xemChiTiet = (sanPhamMoi) => {
      this.setState({ sanPham: sanPhamMoi })
   }
   render() {
      return (
         <div className='container'>
            <header>
               <h3 className='text-center p-3'>Shoes shop</h3>
            </header>
            <div className="row">
               <div className="col-sm-2">
                  <h6>Sidebar</h6>
                  <h6>Nike</h6>
                  <h6>Adidas</h6>
                  <h6>Puma</h6>
                  <h6>Thượng Đỉnh</h6>
               </div>
               <div className="col-sm-10">
                  <ProductList data={data} xemChiTiet={this.xemChiTiet} />
               </div>
            </div>
            <Modal sanPham={this.state.sanPham} />
         </div>
      )
   }
}
