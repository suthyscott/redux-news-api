import {createSlice} from '@reduxjs/toolkit'

export const displayArticleSlice = createSlice({
    name: 'displayArticle',
    initialState: {
        value: {
            title: 'This is the inital display article state'
        }
    },
    reducers: {
        setDisplayArticle: (state, action) => {
            state.value = action.payload
        },
        deleteDisplayArticle: (state) => {
            state.value = null
        }
    }
})

export const {setDisplayArticle, deleteDisplayArticle} = displayArticleSlice.actions

export const selectDisplay = state => state.displayArticle.value

export default displayArticleSlice.reducer