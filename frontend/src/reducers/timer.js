const initialState = {
    timer1: 0,
    timer2: 0,
    timer3: 0,
    timer4: 0,
}

const timer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TIMER":
            const locale = "timer" + action.payload.currentTimer.tablePlaying
            return { ...state, [locale]: action.payload.currentTimer.time }
        default:
            return state
    }
}

export default timer