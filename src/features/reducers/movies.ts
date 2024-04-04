import { Action, Reducer } from "redux"

export interface Movie{
    id:number,
    title: string,
    popularity:number,
    overview: string
}

interface MovieState {
    top: Movie[]
}

const initialState : MovieState = {
    top: [
        {  id: 1, title: 'Panda', popularity: 10, overview: 'Dreams...'  },
        {  id: 2, title: 'Panda-2', popularity: 80, overview: 'No dreams...'  },
        {  id: 3, title: 'Panda-3', popularity: 30, overview: 'Super...'  },
        {  id: 4, title: 'Panda-4', popularity: 16, overview: 'World...'  }
    ]
}
 
const moviesReducer: Reducer <MovieState, Action>  = (state, action) =>{
    return initialState 
}

export default moviesReducer