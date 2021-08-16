import Duck from 'extensible-duck';

const ApiUrlDuck = new Duck({
    name:'apxexplorer',store:'ApiUrl',
    types: ['SET_API_URL'],
    initialState: { apiUrl: ''},
    reducer: (state, action, duck) => {
        switch(action.type){
            case duck.types.SET_API_URL:
                return { apiUrl: action.apiUrl };
            default: return state;
        }
    },
    creators: (duck) => ({
        setApiUrl: (apiUrl) => ({
            type:duck.types.SET_API_URL,apiUrl
        })
    })
});

export default ApiUrlDuck;