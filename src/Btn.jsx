  const CHOOGABTN = ({choogaBTN}) => {
    return <button onClick={choogaBTN}>추가</button>
  }

  const CANCELBTN = ({CancelBTN, item}) => {
    return <button onClick={() => CancelBTN(item)}>취소</button>
  }
  
  const DELETEBTN = ({DeleteBTN, item}) => {
    return <button onClick={() => DeleteBTN(item)}>삭제</button>
  }
  
  const DONEBTN = ({DoneBTN, item}) => {
    return <button onClick={() => DoneBTN(item)}>완료</button>
  }

  export { CHOOGABTN, CANCELBTN, DELETEBTN, DONEBTN }