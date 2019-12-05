const initialState = {
    mesa1: [],
    mesa2: [],
    mesa3: [],
    mesa4: [],
    currentPayment: { playerName: "Nome", timePlaying: 0, PriceToPay: 0 }
}

const snooker = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PLAYER":
            const locale = "mesa" + action.payload.playerData.tablePlaying
            let newLocale = [...state[locale], action.payload.playerData]
            if (newLocale.length === 1) {
                newLocale[0].peopleOnTable = 2
            }
            return { ...state, [locale]: newLocale }
        case "UPDATE_PLAYERS_TABLE":
            const playersOnTable = action.payload.playersOnTable
            const localeTable = action.payload.locale
            return { ...state, [localeTable]: playersOnTable }
        case "SET_PLAYERS_ON_TABLE":
            const localeTablePlayers = "mesa" + action.payload.table_id
            console.log(localeTablePlayers)
            return { ...state, [localeTablePlayers]: action.payload.players }
        case "CURRENT_PLAYER_PAYMENT":
            return { ...state, currentPayment: action.payload.currentPlayer }
        case "CHANGE_PLAYER":
            const playerId = action.payload.id
            const currentTable = action.payload.locale
            const newTableList = [...currentTable]

            newTableList[playerId].peopleOnTable = 2

            return { ...state, [currentTable]: newTableList }
        default:
            return state
    }
}

export default snooker