

let initialState = [
    { id: Math.random(), jaemok: "몰루", naeyong: "뭘봐", isDone: false }
];

//리듀서
let TodoBOXES = (state = initialState, action) => {
    switch (action.type) {
        case "choogaBTN":
            return [...state, action.newBOX]
        case "DoneBTN":
            return [...action.nothisBOXTodoBOXES, ...action.thisBOX]
        case "CancelBTN":
            return [...action.nothisBOXTodoBOXES, ...action.thisBOX]
        case "DeleteBTN":
            return [...action.nothisBOXTodoBOXES]
        default:
            return state
    }
}

export default TodoBOXES