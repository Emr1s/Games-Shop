import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name : "game",
    initialState : {
        game: [
            {
                id: 0,
                name: "Battle Field 2",
                price: 50,
                count: 1,
                img: "https://upload.wikimedia.org/wikipedia/uk/c/c6/%D0%9E%D0%B1%D0%B3%D0%BE%D1%80%D1%82%D0%BA%D0%B0_Battlefield_2.jpg",
            
            },
            {
                id: 1,
                name: "Battle Field IV",
                price: 25,
                count: 1,
                img: "https://upload.wikimedia.org/wikipedia/ru/b/bf/Battlefield_4_Box_Art_PC.jpeg",
            
            },
            {
                id: 2,
                name: "Diablo 3",
                price: 25,
                count: 1,
                img: "https://upload.wikimedia.org/wikipedia/ru/0/05/Diablo_III_cover.jpg",
            
            },
            {
                id: 3,
                name: "Call of Duty: Modern Warfare® 2",
                price: 30,
                count: 1,
                img: "https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png",
            
            },
            {
                id: 4,
                name: "CS:GO",
                price: 20,
                count: 1,
                img: "https://upload.wikimedia.org/wikipedia/uk/8/8c/Counter-Strike._Global_Offensive.jpg",
            
            },
            {
                id: 5,
                name: "Heroes of might and magic",
                price: 15,
                count: 1,
                img: "https://upload.wikimedia.org/wikipedia/uk/c/c7/HMM_III.jpg",
            
            }
        ],
        cart: [],
        search: "",
    },
    reducers: {
        addCard: (state, action) => {
            if(!state.cart.some(item => item.id === action.payload.id))
            state.cart.push(action.payload)
        },
        removeCard: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        incCount: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload)
            item.count++
        },
        decCount: (state, action) => {
            
            const item = state.cart.find(item => item.id === action.payload)
            item.count <= 1 ? item.count = 1 : item.count--
        },
        searchFilter: (state, action) => {
            state.search = action.payload
        },
        clearFilter: (state) => {
            state.search = "";
        }
    }
})

export const { addCard,removeCard,incCount, decCount, searchFilter, clearFilter } = gameSlice.actions;

export default gameSlice.reducer;