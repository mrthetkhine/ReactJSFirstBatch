import logo from './logo.svg';
import './css/App.css';
import Hello from "./componets/Hello";
import HelloWorld from "./componets/HelloWorld";
import {HelloWorldClassComp} from "./componets/HelloWorld";

function App() {
    function hello() {
        console.log('Hello function invoked');
        return "Hello World";
    }

    var names = ['Aung Aung', 'Ma Mya'];
    const jsxCode = <h1>Hello</h1>;
    return (
        <div className="App another-class">
            {hello() + 'How are you'}

            {/* <Hello/>*/}
            <HelloWorld color={"blue"}></HelloWorld>
            <HelloWorldClassComp name="How are you"/>
        </div>
    );
}

export default App;