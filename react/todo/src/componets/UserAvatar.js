function UserAvatar(props)
{
    let user = props.user;
    return(
        <div>
            <img src={user.imageUrl} className="profile"/><br/>
            <span>{user.name}</span>
        </div>
    )
}
export default UserAvatar;