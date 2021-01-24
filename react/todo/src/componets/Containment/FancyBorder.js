export default function FancyBorder(props)
{
    return(
        <div className={'fancy-border'}>
            {props.children}
        </div>
    );
}