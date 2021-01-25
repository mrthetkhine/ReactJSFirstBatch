function User(props)
{
    return(
        <div>
            <h3>Hi User</h3>
        </div>
    )
}
function Admin(props)
{
    return(
        <div>
            <h3>Hi Admin</h3>
        </div>
    )
}
const mapping = {
    'user':User,
    'admin':Admin
}
export default function DynamicComponent(props)
{
    const Component = mapping[props.userType] || User;
    return(
        <div>
                Hello
                <Component/>
        </div>)
}