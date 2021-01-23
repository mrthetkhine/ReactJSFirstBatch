import {NameComponent} from './InlineIfComponent';
export default function ListDemo() {
    const names = ['Aung Aung','Maung Maung', 'Mya Mya'];

    return (
        <div>
            {
                names.map((name,index)=>
                    <NameComponent
                        key={index}
                        name={name}/>)
            }
        </div>
    );
}