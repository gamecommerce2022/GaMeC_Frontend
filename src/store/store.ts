import { configureStore } from '@reduxjs/toolkit'
import * as userProductReducer from './user_product_slice'
// ...

export const store = configureStore({
  reducer: {
    userProduct: userProductReducer.default,
    
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch