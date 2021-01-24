import FancyBorder from "./FancyBorder";
import ListDemo from "../ListDemo";

export default  function WelcomeDialog(props) {
    return(
        <FancyBorder>
            <div> Hello it is child element</div>
            <ListDemo/>
        </FancyBorder>
    );
}