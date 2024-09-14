import './App.css'
import { CarCanvas as Canvas } from './components/Canvas'
import { Overlay } from './components/Overlay'

function App() {
    return (
        <div className='h-screen'>
            <Canvas />
            <Overlay />
        </div>
    )
}

export default App
