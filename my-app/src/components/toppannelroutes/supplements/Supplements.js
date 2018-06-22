import React from 'react';
import SupplementApi from '../../../api/SupplementsApi';

class Supplements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supplementName: "",
            supplementImage: "",
            brand: "",
            supplementImage: "",
            description: "",
            price: "",
            dataList: []
        }
        this.onGetData_Success = this.onGetData_Success.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.getData();
    }
    handleChange(evt) {
        const key = evt.target.name;
        const val = evt.target.value;
        this.setState({
            ...this.state,
            [key]: val
        });
    }

    getData() {
        SupplementApi.SelectAll(this.onGetData_Success, this.onGetData_Error)
    }

    onGetData_Success(resp) {
        this.setState({
            dataList: resp.data.items
        })
        console.log(this.state.dataList);
    }

    onGetData_Error(err) {
        console.log(err);
    }

    onUpdate(id) {
        console.log(id)
    }

    render() {
        return (
            <div className="container">
                <section className="g-pt-50 g-pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 g-pr-40--lg g-mb-50 g-mb-0--lg">
                                {/* <!-- Categories --> */}
                                <h2 className="h5 text-uppercase g-color-gray-dark-v1">Supplements</h2>
                                <hr className="g-brd-gray-light-v4 g-my-15" />
                                <ul className="list-unstyled g-mb-40">
                                    <li className="my-3">
                                        <button className="btn btn-md u-btn-outline-blue g-mr-10 g-mb-15 " data-toggle="modal" data-target=".test">
                                            Add Supplement
                                        </button>
                                    </li>
                                </ul>
                                {/* <!-- End Categories -->*/}
                            </div>
                            <div className="row">
                                {this.state.dataList.map((item, index) =>
                                    <div className="col-md-4" key={index}>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <br />
                                            <h5 className="card-title"><strong>{item.supplementName}</strong></h5>
                                            <img className="card-img-top" src={item.supplementImageUrl} alt="Card image cap" />
                                            <div className="card-body">
                                                <p className="card-text" ><strong>{item.brand}</strong></p>
                                                <p className="card-text">{item.description}</p>
                                                <p className="card-text" >{item.price}</p>
                                                <div>
                                                    <button className="btn btn-md u-btn-outline-orange g-mr-10 g-mb-15" onClick={() => this.onUpdate(item.id)}>Update</button>
                                                    <button className="btn btn-md u-btn-outline-red g-mr-10 g-mb-15">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="modal fade test" role="dialog" data-backdrop='false' style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
                    <div className="modal-dialog model-lg">
                        <div className="modal-content">
                            <div className="modal-header u-shadow-v33 g-color-white g-bg-primary">
                                <h4 className="modal-title">Add Supplement</h4>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                            <div className="modal-body">
                                <div className=" g-mb-50">
                                    {/* <!-- Comment Input --> */}
                                    <div className="row mb-4">
                                        <div className="col-lg-4">
                                            <label className="g-font-weight-500 g-font-size-16">Your Supplement</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input className="form-control g-brd-none g-bg-secondary g-bg-secondary-dark-v1--focus rounded g-px-20 g-py-12"
                                                name='supplementName'
                                                type='text'
                                                value={this.state.supplementName}
                                                onChange={this.handleChange}
                                                placeholder="Insert Supplement Name here ..." />
                                            <br />
                                            <input className="form-control g-brd-none g-bg-secondary g-bg-secondary-dark-v1--focus rounded g-px-20 g-py-12"
                                                name='image'
                                                type='url'
                                                value={this.state.supplementImage}
                                                onChange={this.handleChange}
                                                placeholder="Insert Supplement Name here ..." />
                                            <br />
                                            <input className="form-control g-brd-none g-bg-secondary g-bg-secondary-dark-v1--focus rounded g-px-20 g-py-12"
                                                name='brand'
                                                type='text'
                                                value={this.state.brand}
                                                onChange={this.handleChange}
                                                placeholder="Insert Brand Name here ..." />
                                            <br />

                                            <textarea className="form-control g-brd-none g-bg-secondary g-bg-secondary-dark-v1--focus rounded g-px-20 g-py-12"
                                                name='description'
                                                type='text'
                                                value={this.state.description}
                                                onChange={this.handleChange}
                                                rows="5"
                                                placeholder="Insert Description here ..."></textarea>
                                            <br />

                                            <input className="form-control g-brd-none g-bg-secondary g-bg-secondary-dark-v1--focus rounded g-px-20 g-py-12"
                                                name='comment'
                                                type='text'
                                                value={this.state.price}
                                                onChange={this.handleChange}
                                                placeholder="Insert Price here ..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer" style={{ backgroundColor: "#b1b1b1" }}>
                                <div className="text-right">
                                    <button type="button" className="btn u-shadow-v33 g-color-white g-bg-primary g-bg-main--hover g-rounded-30 g-px-35 g-py-10" data-dismiss="modal" onClick={this.onSubmitPost}>Submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Supplements;