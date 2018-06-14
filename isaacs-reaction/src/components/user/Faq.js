import React from 'react';
import { Button } from 'react-bootstrap';
// import { FormErrors } from '../../FormErrors';
import Axios from 'axios';
import { FormGroup } from 'react-bootstrap';
// import { FormErrors } from '../../FormErrors';

class Faq extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            faqCategoryList: [],
            // faqItem: {
            id: "",
            faqCategoryId: "",
            question: "",
            answer: "",
            displayOrder: "",
            // formErrors: { faqCategoryId: "", question: "", answer: "", displayOrder: "" },
            // categoryValid: false,
            // questionValid: false,
            // answerValid: false,
            // displayValid: false,
            // formValid: false
            // }
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit_Success = this.onSubmit_Success.bind(this);
        this.faqCategories_Success = this.faqCategories_Success.bind(this);
        this.onSubmitEdit_Sucess = this.onSubmitEdit_Sucess.bind(this);
        this.onSubmitPut_Sucess = this.onSubmitPut_Sucess.bind(this);

    }
    // validateField(fieldName, value) {
    //     let fieldValidationErrors = this.state.formErrors;
    //     let categoryValid = this.state.categoryValid;
    //     let questionValid = this.state.questionValid;
    //     let answerValid = this.state.answerValid;
    //     let displayValid = this.state.displayValid;

    //     switch (fieldName) {
    //         case 'faqCategoryId':
    //             categoryValid = value.length >= 0;
    //             fieldValidationErrors.faqCategoryId = categoryValid ? '' : ' is invalid';
    //             break;
    //         case 'question':
    //             questionValid = value.length >= 1;
    //             fieldValidationErrors.question = questionValid ? '' : 'is invalid';
    //             break;
    //         case 'answer':
    //             answerValid = value.length >= 1;
    //             fieldValidationErrors.answer = answerValid ? '' : 'is invalid';
    //             break;
    //         case 'displayOrder':
    //             displayValid = value.length >= 0;
    //             fieldValidationErrors.displayOrder = displayValid ? '' : ' is invalid';
    //             break;
    //         default:
    //             break;
    //     }
    //     this.setState({
    //         formErrors: fieldValidationErrors,
    //         categoryValid: categoryValid,
    //         questionValid: questionValid,
    //         answerValid: answerValid,
    //         displayValid: displayValid
    //     }, this.validateForm);
    // }

    // validateForm() {
    //     this.setState({ formValid: this.state.categoryValid && this.state.questionValid && this.state.answerValid && this.state.displayValid });
    // }

    handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [name]: value
        });
        //     ...this.state,
        //     faqItem: {
        //         ...this.state.faqItem,
        //         [evt.target.name]: [evt.target.value]
        //     }
        // });
    }

    onSubmit(evt) {
        evt.preventDefault();
        var { id, faqCategoryId, question, answer, displayOrder } = this.state;
        var data = {
            id,
            faqCategoryId,
            question,
            answer,
            displayOrder
        };
        if (this.props.match.params.id) {
            Axios.put("https://pacoima-ypi.azurewebsites.net/api/faqs/" + this.props.match.params.id, data, //id goes here, 
                { withCredentials: true })
                .then(this.onSubmitPut_Sucess)
                .catch(this.onSubmitPut_Error);
        } else {
            var { faqCategoryId, question, answer, displayOrder } = this.state;
            var data = {

                faqCategoryId,
                question,
                answer,
                displayOrder
            };
            Axios.post("https://pacoima-ypi.azurewebsites.net/api/faqs", data, { withCredentials: true })
                .then(this.onSubmit_Success)
                .catch(this.onSubmit_Error);
        }
    }


    // assigning the response to a function to be easily access for debugging
    //dont forget to re-bind the button
    onSubmitPut_Sucess(resp) {
        console.log(resp);
        this.props.history.push("/faq");

    }

    onSubmitPut_Error(err) {
        console.log(err);
    }

    onSubmitEdit_Sucess(resp) {
        console.log(resp.data);
        //assign the new data recived to repopulte the form
        this.setState({
            ...this.state,
            id: resp.data.item.id,
            faqCategoryId: resp.data.item.faqCategoryId,
            question: resp.data.item.question,
            answer: resp.data.item.answer,
            displayOrder: resp.data.item.displayOrder
        });
    }

    onSubmitEdit_Error(err) {
        console.log("an err occured while submiting your edited faq", err);
    }

    onSubmit_Success(resp) {
        // debugger;
        console.log(resp);
        console.log(resp.data.item);
        // assigning pageId to the response of the onSubmit success
        this.props.history.push("/faq/" + resp.data.item);
    }

    onSubmit_Error(err) {
        console.log("an error occured while submitting faq", err)
    }

    editMode() {
        Axios.get("https://pacoima-ypi.azurewebsites.net/api/faqs/" + this.props.match.params.id, //id goes here, 
            { withCredentials: true })
            .then(this.onSubmitEdit_Sucess)
            .catch(this.onSubmitEdit_Error);
    }
    faqCategories() {
        Axios.get("https://pacoima-ypi.azurewebsites.net/api/faqcategories")
            .then(this.faqCategories_Success)
            .catch(this.faqCategories_Error);
    }

    faqCategories_Success(resp) {
        // setting the values of the state to faqCategoryList which equals the data recived from the axios call
        this.setState({
            //this is sayin you are calling the whole state and replacing it with what you assign below
            ...this.state,
            faqCategoryList: resp.data.items
        });
    }

    faqCategories_Error(err) {
        console.log(err);
    }

    render() {
        return (
            <div>
                {/* this is saying if the faqCategoryList is great than 0 then play whatever you want below, else you run the code and the animation you put goes away*/}
                {this.state.faqCategoryList.length > 0 ||
                    <div>Let pretend there annimation going on right here...</div>}
                {this.state.faqCategoryList.length === 0 ||
                    <div>
                        <h1>Create Faq</h1>
                        <form>

                            <FormGroup>

                                {/* <div className='panel panel-default'>
                                    <FormErrors formErrors={this.state.formErrors} />
                                </div> */}
                                <div>
                                    <label htmlFor='faqCategoryId'>Faq Category</label>
                                    <select id="faqCategoryId" name="faqCategoryId" require="true" value={this.state.faqCategoryId}
                                        onChange={this.handleChange}>
                                        <option>Select Category</option>
                                        {/* this is assigning the data recived from the axios call and placing it into the option bar, to display the options */}
                                        {this.state.faqCategoryList.length === 0 ||
                                            this.state.faqCategoryList.map((currentItem, index) =>
                                                <option key={index} value={currentItem.id}>{currentItem.name}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor='question'>Question</label>
                                    <input type='text' id="question" name='question' placeholder='Enter Question Here' require='true'
                                        value={this.state.question}
                                        onChange={this.handleChange}
                                    />

                                </div>
                                <div>
                                    <label htmlFor='answer'>Answer</label>
                                    <textarea placeholder='Enter Answer Here' id="answer" name='answer' require='true'
                                        value={this.state.answer}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='display'>Display Order</label>
                                    <input type='number' id='displayOrder' name='displayOrder' require='true'
                                        value={this.state.displayOrder}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </FormGroup>
                        </form>
                        <Button bsStyle='primary' onClick={this.onSubmit}>Submit</Button>
                    </div>}
            </div>
        );
    }

    componentDidMount() {
        this.faqCategories();
        if (this.props.match.params.id) {
            this.editMode();
        }
    }
}


export default Faq;