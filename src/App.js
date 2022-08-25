import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './App.css';
import './style.css';
import Header from "./components/Header"
import Col from 'react-bootstrap/Col';
const App = () => {
  return (
    <Container fluid style={{ backgroundColor: "#fafafa", height:"100vh" }} className="p-0">
      <Header />
    </Container>
  )
}

export default App;