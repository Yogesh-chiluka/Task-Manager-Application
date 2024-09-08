import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../Features/TaskManagement/AddViewUpdateTask.jsx'

export default configureStore({
  reducer: {
    modal: modalReducer
  }
})
