
function UserGreeting()
{
    return (
        <h1>Hi, User</h1>
    );
}
function GuestGreeting()
{
    return (
        <h1>Hi Guest</h1>
    );
}
export default function Greeting(props)
{
    return props.isLoggedIn? <UserGreeting/> : <GuestGreeting/>;
}