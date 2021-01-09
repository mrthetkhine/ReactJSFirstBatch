async function* asyncGenerator()
{
    for(var i=0;i< 3;i++)
    {
        yield i;
    }
}
/*
let i = asyncGenerator();
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
*/
async function getGenerator()
{
    for await(let num of asyncGenerator())
    {
        console.log("Num is ",num);
    }
}
getGenerator();