import * as ActionTypes from './ActionTypes'

export const addComment = (ItemId,User) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload:{
        ItemId: ItemId,
        User: User,
    }
})