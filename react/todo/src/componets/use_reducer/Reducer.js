export const todoState = [
    {
        id:1,
        title : 'Item One'
    },
    {
        id:2,
        title : 'Item Two'
    }
];
/**
 * {
 *     todos:[],
 *     user:{},
 *
 * }

 */


export function reducer(state,action)
{
    console.log('Reducer ',action);
    switch (action.type) {
        case 'add':
            const newState = [...state,action.item];
            console.log('Add ',newState);
            return newState;
        case 'remove':
            return state.filter(item=>item.id!=action.item.id);
        case 'update':
            console.log('Update Action ',action)
            return state.map(item=>
                item.id==action.item.id?
                    {...item,title:action.text}
                    :item);
        default:
            throw Error();
    }
}