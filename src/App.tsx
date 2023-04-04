import React, {useState} from 'react'
import Form from './components/Form'
import Item from './components/Item'
import List from './components/ListItems'



function App(){
  return (
    <>
      <h1>Money Converter</h1>
      <main>
        <Form />
        <List />

      </main>
    </>
  )
  
}
export default App;