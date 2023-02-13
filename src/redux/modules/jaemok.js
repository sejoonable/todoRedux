const initialState = ""

const jaemok = (state = initialState, action) => {
    switch (action.type) {
        case "choogaBTN":
            return ''
        case "jaemokHandler":
            return action.event.target.value
        default:
            return state
    }
}

export default jaemok