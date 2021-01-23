export function NameComponent(props)
{
    if(!props.name)
    {
        return null;
    }
    return(
        <h1>
            Hello {props.name}
        </h1>
    )
}
export default function InlineIfComponent(props)
{
    return(
        <div>
            {
                props.name && <NameComponent name={props.name}/>
            }
        </div>
    );
}