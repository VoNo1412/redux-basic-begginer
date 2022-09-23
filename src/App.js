import React, { Component } from 'react'
import FormAdd from './components/FormAdd'
import Header from './components/Header'
import TableCus from './components/TableCus'


export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <FormAdd/>
        <TableCus/>
      </>
    )
  }
}