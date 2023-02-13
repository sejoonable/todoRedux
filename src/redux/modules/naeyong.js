const initialState = ""

const naeyong = (state = initialState, action) => {
    switch (action.type) {
        case "choogaBTN":
            return ''
        case "naeyongHandler":
            return action.event.target.value
        default:
            return state
    }
}

export default naeyong