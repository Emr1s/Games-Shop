import { configureStore } from '@reduxjs/toolkit'
import gameList from './gameSlice'

export default configureStore({
    reducer: {
        game : gameList,
    }
})