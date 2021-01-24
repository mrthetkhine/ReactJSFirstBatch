import React from "react";

function WithLoading(Component)
{
    return function WithLoadingComponent({isLoading,...props})
    {
        if(!isLoading)
        {
            return(
                <Component {...props}></Component>
            );

        }
        else
        {
            return(
                <p>Hold on loading</p>
            );
        }
    }
}
export default WithLoading;