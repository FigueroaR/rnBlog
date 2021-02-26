// we are exporting a plain function so lowercase first letter

import React, {useReducer} from 'react';

export default (reducer, action, initialState) => {
    const Context = React.createContext();

    const provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (<Context.provider value={{state}} >
            {children}
        </Context.provider>)
    }

    return {Context, Provider };
    
}