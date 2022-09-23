import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/form.css"
import { eysShow, eysHide } from '../assets/icons/eys';
import { connect } from 'react-redux';
import {  postUser } from '../store/actions/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  email: '',
  password: '',
  name: '',
  isShowPass: false,
}

class FormAdd extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }
  onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value })
  handleSubmit = () => {
    const { isShowPass, ...user } = this.state;
    this.props.addUser(user)
    toast.success('Post user success!', {autoClose: 200});
    this.setState(initialState)
  }

  render() {
    return (
      <Container>
        <Form onSubmit={e => e.preventDefault()}>
          <ToastContainer />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' onChange={this.onChangeInput} value={this.state.email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPass">
            <Form.Label>Password address</Form.Label>
            <div className='d-flex border rounded-pill'>
              <Form.Control style={{ border: 'none', background: 'none', borderRadius: '0', outline: 'none', touchAction: 'none' }}
                type={!this.state.isShowPass ? 'password' : 'text'} placeholder="Enter pasword" name='password' onChange={this.onChangeInput} value={this.state.password}
              />
              <span className='icons' onClick={() => this.setState({ isShowPass: !this.state.isShowPass })}>
                {(this.state.isShowPass && this.state.password !== '') ? eysShow : eysHide}
              </span>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name='name' onChange={this.onChangeInput} value={this.state.name} />
          </Form.Group>
          <div className='text-end'>
            <Button variant="primary" className='mb-3' onClick={this.handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(postUser(user)),  
})
export default connect(null, mapDispatchToProps)(FormAdd)