const CANCELBTN = ({CancelBTN, item}) => {
    return <button onClick={() => CancelBTN(item)}>취소</button>
  }
  
  const DELETEBTN = ({DeleteBTN, item}) => {
    return <button onClick={() => DeleteBTN(item)}>삭제</button>
  }
  
  const DONEBTN = ({DoneBTN, item}) => {
    return <button onClick={() => DoneBTN(item)}>완료</button>
  }

  export { CANCELBTN, DELETEBTN, DONEBTN }