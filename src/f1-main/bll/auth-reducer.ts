
type AuthStateType = {

}

let initialState = {

}

type ActionType = setAuthUserData

export const authReducer = (state: AuthStateType = initialState, action: ActionType) => {
    switch (action.type) {

        case'SET-AUTH-USER-DATA' :
            return {...state}

        default: return state

    }
}

type setAuthUserData = ReturnType<typeof setAuthUserData>
const setAuthUserData = () => {
    return ({type: 'SET-AUTH-USER-DATA'}) as const
}