import { createSlice } from '@reduxjs/toolkit'

export const modalView = createSlice({
  name: 'modal',
  initialState: {
    add: false,
    edit: false,
    view: false
  },
  reducers: {
    addTaskOpen: state => {
      state.add = true
    },
    addTaskClose: state => {
      state.add = false
    },
    viewTaskOpen: (state) => {
      state.view = true
    },
    viewTaskClose: (state) => {
        state.view = false
    },
    editTaskOpen: state => {
        state.edit = true
    },
    editTaskClose: state => {
        state.edit = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { addTaskOpen, addTaskClose, editTaskOpen, editTaskClose, viewTaskOpen, viewTaskClose } = modalView.actions

export default modalView.reducer