import logo from './logo.svg';
import './css/App.css';
import Hello from "./componets/Hello";
import HelloWorld from "./componets/HelloWorld";
import {HelloWorldClassComp} from "./componets/HelloWorld";
import UserAvatar from "./componets/UserAvatar";
import Counter from "./componets/Counter";
import EventDemoComponent from './componets/EventDemoComponent';
import Greeting from "./componets/Greeting";
import InlineIfComponent from "./componets/InlineIfComponent";
import ListDemo from "./componets/ListDemo";
import NameForm from "./componets/NameForm";
import WelcomeDialog from './componets/Containment/Dialog';
import HocDemo from "./componets/hoc/HocDemo";
import MouseTracker from "./componets/render_prop/MouseTracker";
import Mouse from "./componets/render_prop/Mouse";
import MouseWithCat from "./componets/render_prop/MouseWithCat";
import MouseTrackerWithRenderProps from "./componets/render_prop/MouseTrackerWithRenderProps";
import DynamicComponent from "./componets/jsx_indepth/DynamicComponent";
import CustomTextInput from "./componets/ref_demo/CustomTextInput";
import AutoFocusTextInput from "./componets/ref_demo/AutoFocusTextInput";
import Table from "./componets/fragment/Table";
import {DatePicker} from "./componets/third_party/DatePicker";
import ModalDemo from './componets/portal/ModalDemo';
import CSS_Demo from "./componets/styling/CSS_Demo";
import HookExample from "./componets/hook/HookExample";
import UseEffectDemo from "./componets/hook/UseEffectDemo";
function App() {
    function hello() {
        console.log('Hello function invoked',this );
        return "Hello World";
    }

    var names = ['Aung Aung', 'Ma Mya'];
    const jsxCode = <h1>Hello</h1>;

    let user = {
        imageUrl : 'https://m.media-amazon.com/images/M/MV5BMjQ4MjEyNTE4M15BMl5BanBnXkFtZTgwMzcyNDE0NDM@._V1_.jpg',
        name : 'James'
    };
    return (
        <div className="App another-class">
           {/* {hello() + 'How are you'}*/}

            {/* <Hello/>*/}
            {/*<HelloWorld color={"blue"}></HelloWorld>
            <HelloWorldClassComp name="How are you"/>*/}
            {/*<Counter value={5}/>
            <UserAvatar user={user}/>*/}
            {/**/}
            {/*<EventDemoComponent btnToggleClick={hello} />
            <Greeting isLoggedIn={true}/>
            <InlineIfComponent name={"Tk"}/>
            <ListDemo/>*/}
          {/*  <NameForm/>*/}
          {/*  <WelcomeDialog/>*/}
             {/* <HocDemo/>*/}
            {/*<MouseTracker/>*/}
           {/* {<Mouse/>}*/}
           {/* <MouseWithCat></MouseWithCat>*/}
          {/* <MouseTrackerWithRenderProps/>*/}
          {/*  {<DynamicComponent userType={"admin1"}/>}*/}
           {/* {
                <CustomTextInput/>
            }*/}
          {/*  {
                <AutoFocusTextInput/>
            }*/}
           {/* {<Table/>}*/}
          {/* <DatePicker/>*/}
          {/*  {<ModalDemo/>}*/}
            {
               /* <CSS_Demo/>*/
               /* <HookExample/>*/
                <UseEffectDemo/>
            }
        </div>
    );
}

export default App;