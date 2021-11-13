import { Alert } from 'react-bootstrap';
import Message from '../Message/message';

function App() {
    return(
        <Alert variant="success" className="d-flex justify-content-center">
            <Message textMessage="Hello GeekBrains! My name is Nastya!"/>
        </Alert>
    )
}

export default App;