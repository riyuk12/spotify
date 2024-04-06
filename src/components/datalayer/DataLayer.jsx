import React,{createContext,useContext,useReducer} from 'react'


export const DataLayerContext=createContext();

export const DataLayer=({ initialState , reducer , children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue=()=>useContext(DataLayerContext)

//data layer needs three values create context, to create a context object
//reducer to update based on action taken
//use context to use it as a state elsewhere in code 