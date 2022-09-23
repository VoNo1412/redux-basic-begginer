import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { fetchProducts, deleteUser } from '../store/actions/actions';
import Loading from "../components/Loading";
import ListItem from './ListItem';
import "../styles/table.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const TableCus = ({ getData, data, deleteUser }) => {
  const [loading, setLoading] = useState(data.isLoading);
  useEffect(() => {
    getData();

    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [getData])

  const handleDel = (id) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      deleteUser(id)
    }, 300);
    toast.warning('delete Success', {autoClose: 200})
  }


  return (
    <Container>
      <ToastContainer />
      {loading && <div className='overflow'></div>}
      <div className='loading'>
        {loading && <Loading />}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!loading && <ListItem data={data} handleDel={handleDel}  />}
        </tbody>

      </Table>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  data: state.fetchData,
});

const mapDipsatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchProducts()),
  deleteUser: (id) => dispatch(deleteUser(id)),
})

export default connect(mapStateToProps, mapDipsatchToProps)(TableCus)