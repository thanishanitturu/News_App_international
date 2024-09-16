import './App.css';
import {Heading,List} from "./heading"

const customStyle={
    color:"yellow",
    fontSize:"100px",
    border:"2px solid black",
    backgroundColor:"indigo"

}




const date=new Date();
const currentTime=date.getHours();
let greetings;
if(currentTime<12)
{
    greetings="Good Morning"
    customStyle.color="green"
}
else if(currentTime<18)
{
    greetings="Good Afternoon"
    customStyle.color="red"
}
else{
    greetings="Good  Night"
    customStyle.color="blue"
}

function App() {
    return (
        <div >
            <Heading />
            <h1 className='heading' style={customStyle}>{greetings}</h1>
            <List />
        </div>  

    );
}

export default App;
