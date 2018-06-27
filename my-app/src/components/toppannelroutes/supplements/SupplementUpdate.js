import React from 'react';
import SupplementsApi from '../../../api/SupplementsApi';
import FileUploadApi from '../../../api/FileUploadApi';

class SupplementUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supplementName: "",
            supplementImage: "",
            brand: "",
            description: "",
            price: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onUpdate_Success = this.onUpdate_Success.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        let data = parseInt(this.props.match.params.id);
        SupplementsApi.SelectById(data, this.onSuccess, this.onError)
    }

    onSuccess(resp) {
        debugger;
        this.setState({
            supplementName: resp.data.item.supplementName,
            supplementImage: resp.data.item.supplementImageUrl,
            brand: resp.data.item.brand,
            description: resp.data.item.description,
            price: resp.data.item.price
        })
    }

    onError(err) {
    }

    handleChange(evt) {
        const key = evt.target.name;
        const val = evt.target.value;
        this.setState({
            ...this.state,
            [key]: val
        });
    }

    onChange(evt) {
        this.setState({ supplementImage: evt.target.files[0] })
    }

    fileUpload(file) {
        const formData = new FormData();
        formData.append('UploadedFile', file, file.name);
        FileUploadApi.FileInsert(formData, this.fileUploadSuccess, this.onSubmit_Error);
    }

    fileUploadSuccess(resp) {
        FileUploadApi.FileById(resp.data.item, this.fileByIdSuccess, this.onSubmit_Error);
        this.setState({ file: '' })
    }

    fileByIdSuccess(resp) {
        this.setState({
            supplementImage: resp.data.item.location
        });
    }

    onSubmit_Error(err) {
        console.log(err);
    }

    onUpdate(som) {
        som.preventDefault();
        let id = parseInt(this.props.match.params.id);
        let data = {
            id: id,
            supplementName: this.state.supplementName,
            supplementImageUrl: this.state.supplementImage,
            brand: this.state.brand,
            description: this.state.description,
            price: this.state.price
        }
        SupplementsApi.Update(id, data, this.onUpdate_Success, this.onUpdate_Error)
    }

    onUpdate_Success(resp) {
        this.props.history.push("/supplements")
    }

    onUpdate_Error(err) {
        console.log(err)
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <div className="container">
                    <form className="g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30">
                        <div className="form-group row g-mb-25">
                            <label htmlFor="example-text-input" className="col-2 col-form-label">Supplement Name</label>
                            <div className="col-10">
                                <input className="form-control rounded-0 form-control-md" type="text" value={this.state.supplementName} id="supplementName" name="supplementName" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row g-mb-25">
                            <label htmlFor="example-search-input" className="col-2 col-form-label"> Upload Supplement Image</label>
                            <div className="col-10">
                                <input className="form-control rounded-0 form-control-md" type="file" id="supplementImage" name="supplementImage" onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group row g-mb-25">
                            <label htmlFor="example-search-input" className="col-2 col-form-label">Supplement Image Url</label>
                            <div className="col-10">
                                <input className="form-control rounded-0 form-control-md" type="url" value={this.state.supplementImage} id="supplementImage" name="supplementImage" onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group row g-mb-25">
                            <label htmlFor="example-email-input" className="col-2 col-form-label">Brand</label>
                            <div className="col-10">
                                <input className="form-control rounded-0 form-control-md" type="text" value={this.state.brand} id="brand" name="brand" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row g-mb-25">
                            <label htmlFor="example-url-input" className="col-2 col-form-label">Description</label>
                            <div className="col-10">
                                <input className="form-control rounded-0 form-control-md" type="textarea" value={this.state.description} id="description" name="description" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row g-mb-25">
                            <label htmlFor="example-tel-input" className="col-2 col-form-label">Price</label>
                            <div className="col-10">
                                <input className="form-control rounded-0 form-control-md" type="text" value={this.state.price} id="price" name="price" onChange={this.handleChange} />
                            </div>
                        </div>
                        <button className="btn btn-md u-btn-inset u-btn-outline-teal g-mr-10 g-mb-15" onClick={this.onUpdate}>Update</button>
                    </form>
                </div>
                <div className="container col-md-12">
                    <div className="float-center" style={{ paddingLeft: "350px" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.supplementName}</h5>
                                <img className="card-img-top" style={{ width: "65px", height: "100px", margin: "auto" }} src={this.state.supplementImage} alt="Card image cap" />
                                <p className="card-text">{this.state.brand}</p>
                                <p className="card-text">{this.state.description}</p>
                                <p className="card-text">{this.state.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SupplementUpdate;