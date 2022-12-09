import "./App.css"
import Greeting from "../Greeting"

function App() {
    return (
        <>
            <h1 id="title" class="foo">Hello World!</h1>
            <Greeting name="Matt" homeCity="Brisbane" />
        </>
    )
}

export default App