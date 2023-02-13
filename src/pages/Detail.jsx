import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const KING = styled.div`
  height: 1000px;
  display: flex;
`

const STBOX = styled.div`
  width: 600px;
  height: 400px;

  border: 1px solid black;
  border-radius: 5px;

  margin: auto;

  text-align: center;
  justify-content: center;
`

function Detail() {
  const TodoBOXES = useSelector((state) => state.TodoBOXES);
  const param = useParams();

  const detail = TodoBOXES.find(v => v.id === +param.id)

  return (
  <KING>
    <STBOX>
      id : {detail.id}
      <br />
      제목 : {detail.jaemok}
      <br />
      내용 : {detail.naeyong}
      <br />
      <Link to="/">이전으로</Link>
    </STBOX>
  </KING>
  )
}

export default Detail