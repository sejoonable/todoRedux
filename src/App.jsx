import React, { useState } from 'react'
import styled from 'styled-components'
import Router from './shared/Router'
import { CANCELBTN, DELETEBTN, DONEBTN } from './Btn'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const TodoBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 20px;
`

const IngBoxSET = styled.div`
  display: flex;
`

const DoneBoxSET = styled.div`
  display: flex;
`


function App() {
  const TodoBOXESstore = useSelector((state) => state);
  console.log(TodoBOXESstore)

  const dispatch = useDispatch()

  const [TodoBOXES, setTodoBOXES] = useState([
    { id: Math.random(), jaemok: "몰루", naeyong: "뭘봐", isDone: false }
  ])

  const [jaemok, setjaemok] = useState('')
  const [naeyong, setnaeyong] = useState('')

  const jaemokHandler = (event) => {
    setjaemok(event.target.value)
  }
  const naeyongHandler = (event) => {
    setnaeyong(event.target.value)
  }

  const choogaBTN = () => {
    const newBOX = { id: Math.random(), jaemok, naeyong, isDone: false }
    setTodoBOXES([...TodoBOXES, newBOX])
    setjaemok("")
    setnaeyong("")
  }
  const DoneBTN = (item) => {
    const thisBOX = TodoBOXES.filter(v => v.id === item.id)
    const nothisBOXTodoBOXES = TodoBOXES.filter(v => v.id !== item.id)
    thisBOX[0].isDone = true
    setTodoBOXES([...nothisBOXTodoBOXES, ...thisBOX])
  }
  const CancelBTN = (item) => {
    const thisBOX = TodoBOXES.filter(v => v.id === item.id)
    const nothisBOXTodoBOXES = TodoBOXES.filter(v => v.id !== item.id)
    thisBOX[0].isDone = false
    setTodoBOXES([...nothisBOXTodoBOXES, ...thisBOX])
  }
  const DeleteBTN = (item) => {
    const nothiBOXTodoBOXES = TodoBOXES.filter(v => v.id !== item.id)
    setTodoBOXES([...nothiBOXTodoBOXES])
  }

  

  return (
  <>
  <Router />
    <div>
      제목 : <input value={jaemok} onChange={jaemokHandler} />
      내용 : <input value={naeyong} onChange={naeyongHandler} />
      <button onClick={choogaBTN}>추가</button>
    </div>
  
    <IngBoxSET>
      {
        TodoBOXES.filter(item => item.isDone === false).map(item => {
          return (
            <TodoBox key={item.id}>
              <div>{item.jaemok}</div>
              <div>{item.naeyong}</div>
              <DONEBTN DoneBTN={DoneBTN} item={item}/>
              <DELETEBTN DeleteBTN={DeleteBTN} item={item}/>
              <Link to={`/Detail/${item.id}`}>상세정보</Link>
            </TodoBox>
          )
        })
      }
    </IngBoxSET>

    <hr />

    <DoneBoxSET>
      {
        TodoBOXES.filter(item => item.isDone === true).map(item => {
          return (
            <TodoBox key={item.id}>
              <div>{item.jaemok}</div>
              <div>{item.naeyong}</div>
              <CANCELBTN CancelBTN={CancelBTN} item={item}/>
              <DELETEBTN DeleteBTN={DeleteBTN} item={item}/>
              <Link to="/Detail.jsx">상세정보</Link>
            </TodoBox>
          )
        })
      }
    </DoneBoxSET>
  </>
  )
}


export default App

