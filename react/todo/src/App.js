import logo from './logo.svg';
import './css/App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
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
import RealWorldUsageHook from "./componets/hook/RealWorldUsageHook";
import UseCallBackHokDemo from "./componets/hook/UseCallBackHookDemo.js";
import UseMemoDemo from "./componets/hook/UseMemoDemo";
import ContextProblemDemo from "./componets/context/problem/ContextProblemDemo";
import ContextDemo from "./componets/context/contextdemo/ContextDemo";
import UseReducerDemo from "./componets/use_reducer/UseReducerDemo";
import ToDoList from "./componets/use_reducer/ToDoList";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import { BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
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
    const id = 1;
    const isAdmin = true;
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Main</Nav.Link>
                        <Nav.Link href={`/about/${id}`}>About Us</Nav.Link>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        {
                            isAdmin?<Nav.Link href="/admin">Admin</Nav.Link>:null
                        }

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about/:id" component={AboutUs}>

                </Route>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                {
                    isAdmin? <Admin/>:null

                }
            </Switch>
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
                {/* <HookExample>
            </HookExample>*/}
                {
                    /* <CSS_Demo/>*/
                    /*
                                    <UseEffectDemo>
                                    </UseEffectDemo>*/
                }
                {/* <RealWorldUsageHook/>*/}
                {/* <UseCallBackHokDemo/>*/}
                {/* <UseMemoDemo/>*/}

                {/*<ContextProblemDemo user={user}></ContextProblemDemo>*/}
                {/*<ContextDemo/>*/}
                {/*   {<UseReducerDemo/>}*/}
               {/* <main>
                    <nav className="nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </main>*/}
               {/* <ToDoList/>*/}
            </div>
        </Router>

    );
}

export default App;