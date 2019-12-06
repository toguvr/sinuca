import axios from 'axios'

const baseUrl = "http://localhost:3333"

export const setPlayer = (playerData) => ({
    type: 'SET_PLAYER',
    payload: {
        playerData
    }
})

export const setPlayersOnTable = (players, table_id) => ({
    type: 'SET_PLAYERS_ON_TABLE',
    payload: {
        players,
        table_id
    }
})

export const setCurrentTime = (currentTimer) => ({
    type: 'SET_TIMER',
    payload: {
        currentTimer
    }
})

export const updatePlayers = (playersOnTable, locale) => ({
    type: 'UPDATE_PLAYERS_TABLE',
    payload: {
        playersOnTable,
        locale
    }
})

export const currentPayment = (currentPlayer) => ({
    type: 'CURRENT_PLAYER_PAYMENT',
    payload: {
        currentPlayer
    }
})

export const changePlayer = (id, locale) => ({
    type: 'CHANGE_PLAYER',
    payload: {
        id,
        locale
    }
})

export const getPlayers = (table_id) => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/table/${table_id}`)
    dispatch(setPlayersOnTable(response.data, table_id))
}

export const addPlayer = (playerData) => async (dispatch) => {
    const body = {
        playerName: playerData.playerName,
        tablePlaying: playerData.tablePlaying,
        playing: playerData.playing,
        peopleOnTable: playerData.peopleOnTable,
        startedTime: playerData.startedTime,
        timePlaying: playerData.timePlaying,
        PriceToPay: playerData.PriceToPay,
    }

    const response = await axios.post(`${baseUrl}/table/${playerData.tablePlaying}/addplayer`, body)
    if (response.status === 200) {
        dispatch(getPlayers(playerData.tablePlaying))
    }
}

export const leaveTable = (playerSelected, table_id) => async (dispatch) => {
    const body = {
        playerSelected
    }

    const response = await axios.put(`${baseUrl}/player/${table_id}`, body)

    if (response.status === 200) {
        dispatch(getPlayers(table_id))
        dispatch(currentPayment(response.data))
    }
}

export const updateAllPlayersPayment = (playersArray, table_id) => async (dispatch) => {
    const body = {
        playersArray
    }

    const response = await axios.put(`${baseUrl}/update/${table_id}`, body)

    if (response.status === 200) {
        dispatch(getPlayers(table_id))
    }
}

export const updateTimer = (time, tableNumber) => async (dispatch) => {
    const body = {
        time
    }

    const response = await axios.put(`${baseUrl}/timer/${tableNumber}`, body)

    if (response.status === 200) {
        dispatch(setCurrentTime(response.data))
    }
}

export const getTimers = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/timer/`)

    if (response.status === 200) {
        dispatch(setCurrentTime(response.data))
    }
}

export const timeZeroed = (table, table_number) => async (dispatch) => {

    const response = await axios.put(`${baseUrl}/time/${table}`)

    if (response.status === 200) {
        dispatch(setPlayersOnTable(response.data, table_number))
    }
}