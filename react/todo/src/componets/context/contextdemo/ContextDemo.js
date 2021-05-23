import React from 'react';
import {UserContext} from "./UserContext";

export default class ContextDemo extends React.Component
{

    render() {
        //console.log('User Context in first component ',UserContext);
        const user = {
            imageUrl : 'https://m.media-amazon.com/images/M/MV5BMjQ4MjEyNTE4M15BMl5BanBnXkFtZTgwMzcyNDE0NDM@._V1_.jpg',
            name : 'James'
        };
       return( <div>
           Context
           <UserContext.Provider value={user}>
               <SecondChild/>
           </UserContext.Provider>

        </div>);

    }
}
class SecondChild extends React.Component
{
    render() {
        return( <div>
            Second Child
            <ThirdChild/>
            <FourthChild/>
        </div>);

    }
}
class ThirdChild extends React.Component
{
    render() {
        return( <div>
            <UserContext.Consumer>
                {
                    user=>{
                        console.log('User ',user);
                        return (<div>
                          User in third component  {user.name}
                          <img src={user.imageUrl} width={150} height={150}/>
                        </div>)
                    }
                }
            </UserContext.Consumer>
            Third Child

        </div>);

    }
}
function FourthChild(prpos)
{
    const user = React.useContext(UserContext);
    return (
        <div>
            <h3>User in fourth component  {user.name}</h3>
        </div>
    )
}