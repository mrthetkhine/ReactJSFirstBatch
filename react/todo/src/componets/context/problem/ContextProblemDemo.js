import React from 'react';

export default function ContextProblemDemo(props)
{
    console.log("props at context problem ",props);
    return(
        <div>
            First Component {props.user.name}
            <SecondComponent user={props.user}>

            </SecondComponent>
        </div>
    );
}
function SecondComponent(props)
{
    console.log("Second component props ",props);
    return(
        <div>
            Second Component
            <ThirdComponent user={props.user}>

            </ThirdComponent>
        </div>
    )

}
function ThirdComponent(props)
{
    console.log("Third component props ",props);
    return(
        <div>
            Third Component Name is {props.user.name}
        </div>
    )
}