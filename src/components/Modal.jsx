import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { sanPham } = this.props
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog p-2" role="document" style={{ maxWidth: '1000px' }}>
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h5 className="modal-title">Chi tiết sản phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className='row m-0'>
                            <div className='col-md-6 text-center'>
                                <img src={sanPham.image} alt='' className='img-fluid' />
                            </div>
                            <div className="col-md-6 d-flex flex-column justify-content-center modal-body">
                                <h3>{sanPham.name}</h3>
                                <h5 className='text-danger d-inline-block'>PRICE: {sanPham.price}$</h5>
                                <span className='text-success'>QUANTITY: {sanPham.quantity}</span>
                                <p style={{textAlign:'justify'}}>{sanPham.description}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

