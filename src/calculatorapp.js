import './App.css';
import { add,subtract,multiply,divide } from './calculator';

function App() {
    return (
        <div >
            <ul>
                <li>{add(1,2)}</li>
                <li>{subtract(3,4)}</li>
                <li>{multiply(8,9)}</li>
                <li>{divide(5,2)}</li>
                
            </ul>
        </div>  

    );
}

export default App;