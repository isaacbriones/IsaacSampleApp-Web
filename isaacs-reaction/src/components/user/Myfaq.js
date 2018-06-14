import React from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';

class Myfaqs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faqTableList: [],
            faqCategories: []
        };
        this.getFaqs = this.getFaqs.bind(this);
        this.getFaqs_Success = this.getFaqs_Success.bind(this);
        this.faqCategories = this.faqCategories.bind(this);
        this.faqCategories_Success = this.faqCategories_Success.bind(this);
    }


    getFaqs() {
        // debugger;
        Axios.get("https://pacoima-ypi.azurewebsites.net/api/faqs/user", { withCredentials: true })
            .then(this.getFaqs_Success)
            .catch(this.getFaqs_Error);
    }

    getFaqs_Success(resp) {
        debugger;
        console.log(resp);
        this.setState({
            ...this.state,
            faqTableList: resp.data.items
        });

    }

    getFaqs_Error(err) {
        console.log(err);
    }
    faqCategories() {
        Axios.get("https://pacoima-ypi.azurewebsites.net/api/faqcategories")
            .then(this.faqCategories_Success)
            .catch(this.faqCategories_Error);
    }

    faqCategories_Success(resp) {
        console.log(resp);
        this.setState({
            ...this.state,
            faqCategories: resp.data.items
        });
    }

    faqCategories_Error(err) {
        console.log("an err occured", err);
    }
    render() {
        return (
            <div>
                <h1> My Faqs</h1>
                {this.state.faqCategories
                    .map((currentItem, index) =>
                        <div key={index}>
                            <ul>
                                <li value={currentItem.id}>
                                    {currentItem.name}
                                </li>

                            </ul>
                        </div>
                    )}

                {this.state.faqTableList
                    .map((currentItem, index) =>
                        <div key={index}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><h1>{currentItem.category}</h1></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Id:{currentItem.id}</p>
                            <p>Question:{currentItem.question}</p>
                            <p>Answer:{currentItem.answer}</p>
                            <p>Display Order:{currentItem.displayOrder}</p>
                            <Button bsStyle="primary" onClick={this.edit}>Edit</Button>
                            <Button bsStyle="danger" onClick={this.delete}>Delete</Button>
                        </div>
                    )}
            </div >
        );
    }




    componentDidMount() {
        this.getFaqs();
        this.faqCategories();
    }
}



export default Myfaqs;
