import React, { useState } from 'react'
import styled from 'styled-components'
import { CHOOGABTN, CANCELBTN, DELETEBTN, DONEBTN } from '../Btn'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export const TodoBox = styled.div`
  width: 400px;
  height: 250px;
  border: 1px solid red;
  margin: 20px;
`

const IngBoxSET = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const DoneBoxSET = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const KING = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  
`

function Home() {
  const TodoBOXES = useSelector((state) => state.TodoBOXES);

  const jaemok = useSelector((state) => state.jaemok)
  const naeyong = useSelector((state) => state.naeyong)

  const dispatch = useDispatch()

  // const [TodoBOXES, setTodoBOXES] = useState([
  //   { id: Math.random(), jaemok: "몰루", naeyong: "뭘봐", isDone: false }
  // // ])

  // const [jaemok, setjaemok] = useState('')
  // const [naeyong, setnaeyong] = useState('')

  const jaemokHandler = (event) => {
    // setjaemok(event.target.value)
    dispatch({type: "jaemokHandler", event:event})
  }
  const naeyongHandler = (event) => {
    // setnaeyong(event.target.value)
    dispatch({type: "naeyongHandler", event:event})
  }

  const choogaBTN = () => {
    const newBOX = { id: Math.random(), jaemok, naeyong, isDone: false }
    // setTodoBOXES([...TodoBOXES, newBOX])
    // setjaemok("")
    // setnaeyong("")
    console.log(TodoBOXES)
    dispatch({type : "choogaBTN", newBOX:newBOX})
  }
  const DoneBTN = (item) => {
    const thisBOX = TodoBOXES.filter(v => v.id === item.id)
    const nothisBOXTodoBOXES = TodoBOXES.filter(v => v.id !== item.id)
    thisBOX[0].isDone = true
    // setTodoBOXES([...nothisBOXTodoBOXES, ...thisBOX])
    dispatch({type: "DoneBTN", nothisBOXTodoBOXES:nothisBOXTodoBOXES, thisBOX:thisBOX})
  }
  const CancelBTN = (item) => {
    const thisBOX = TodoBOXES.filter(v => v.id === item.id)
    const nothisBOXTodoBOXES = TodoBOXES.filter(v => v.id !== item.id)
    thisBOX[0].isDone = false
    // setTodoBOXES([...nothisBOXTodoBOXES, ...thisBOX])
    dispatch({type: "CancelBTN", nothisBOXTodoBOXES:nothisBOXTodoBOXES, thisBOX:thisBOX})
  }
  const DeleteBTN = (item) => {
    const nothisBOXTodoBOXES = TodoBOXES.filter(v => v.id !== item.id)
    // setTodoBOXES([...nothisBOXTodoBOXES])
    dispatch({type: "DeleteBTN", nothisBOXTodoBOXES:nothisBOXTodoBOXES})
  }


  return (
  <KING>
    <div>
      제목 : <input value={jaemok} onChange={jaemokHandler} />
      내용 : <input value={naeyong} onChange={naeyongHandler} />
      <CHOOGABTN choogaBTN={choogaBTN}/>
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
              <Link to={`/Detail/${item.id}`}>상세정보</Link>
            </TodoBox>
          )
        })
      }
    </DoneBoxSET>
  </KING>
  )
}


export default Home
