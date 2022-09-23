import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { getUser, updateUser } from '../store/actions/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListItem = ({ data, handleDel, getUser, user, updateUser }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [state, setState] = useState({});

  useEffect(() => {
    user && setState(user);
  }, [user])

  const listData = data.users.map(item =>
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td>
        {/* <button>Edit</button> */}
        <Button variant="primary" onClick={() => {
          getUser(item.id)
          setShow(!show)
        }}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => handleDel(item.id)}>
          Del
        </Button>
      </td>
    </tr>
  )

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdateUser = () => {
    const { id, ...user } = state;
    updateUser(user, id);
    toast.info('Update success', { autoClose: 200 })
    handleClose();
    setState({})
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="#" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder='email' name="email" onChange={onChangeInput} value={state.email || ''} /> <br />
            <input type="text" name='password' placeholder='password' onChange={onChangeInput} value={state.password || ''} /> <br />
            <input type="text" placeholder='username' name='name' onChange={onChangeInput} value={state.name || ''} /> <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
        <ToastContainer />
      </Modal>
      {listData}
    </>

  )
}

const mapStateToProps = (state) => ({
  user: state.fetchData.user
})

const mapDipsatchToProps = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id)),
  updateUser: (user, id) => dispatch(updateUser(user, id))
})
export default connect(mapStateToProps, mapDipsatchToProps)(ListItem)