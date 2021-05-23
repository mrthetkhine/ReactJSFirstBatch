let id= 3;
const getUniqueId = () => id++;
//Action Creator
export function addAction(title)
{
    //Call Rest
    let id = getUniqueId();
    return {
        type:'add',
        item:{
            title: title,
            id : id
        }
    }
}
export function removeAction(item)
{
    return {
        type:'remove',
        item:item
    }
}
export function updateAction(item,text)
{
    return {
        type:'update',
        item:item,
        text:text,
    }
}