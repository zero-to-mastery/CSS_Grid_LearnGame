import React from 'react';
import './Form.styles.css';

class Form extends React.Component{
        constructor(props) {
                super(props);
                this.state = {
                        name: '',
                        email: ''
                }
        }

        handleChange = event => {
                const {name, value} = event.target;
                this.setState({[name]: value}) //using es6 syntax
        };

        handleSubmit = event => {
                event.preventDefault();
                const {name, email } = this.state;
                this.props.formSubmit(name, email)
        };
        render() {
                return (
                 <form action="/#" className='form' onSubmit={this.handleSubmit}>
                            <input className='form__input' type='text' name='name' placeholder='name' onChange={this.handleChange} required/>
                            <input className='form__input' type='email' name='email' placeholder='email' onChange={this.handleChange}/>
                            <button className='record_btn' type='submit'>Submit</button>
                 </form>
                )
        }
}

export default Form;