const initialState = {
    timer1: 0,
    timer2: 0,
    timer3: 0,
    timer4: 0,
}

const timer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TIMER":
            return { ...state, timer1: action.payload.currentTimer.timer1, timer2: action.payload.currentTimer.timer2, timer3: action.payload.currentTimer.timer3, timer4: action.payload.currentTimer.timer4 }
        default:
            return state
    }
}

export default timer