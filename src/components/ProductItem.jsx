import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { sanPham, xemChiTiet } = this.props
        return (
            <div className="card bg-success h-100">
                <img className="card-img-top w-50 m-auto" src={sanPham.image} alt='' />
                <div className="card-body bg-secondary text-white">
                    <h5 className="card-title">{sanPham.name}</h5>
                    <h6 className="card-text text-info">{sanPham.price}$</h6>
                    <p className="card-text">{sanPham.shortDescription}</p>
                </div>
                <div className='card-footer bg-secondary border-top-0'>
                    <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#modelId" onClick={() => xemChiTiet(sanPham)}>Xem chi tiết</button>
                </div>
            </div>

        )
    }
}
