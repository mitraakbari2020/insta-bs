import { Row, Col, Container } from 'react-bootstrap';
import SearchBox from './SearchBox';
const Header = () => {
    
    return (
        <Container fluid className="insta-bs-header">
            <Row>
                <Container style={{padding:"0 250px"}}>
                    <Row>
                        <Col className="text-left d-flex justify-content-start" sm={4}>
                            Logo
                        </Col>
                        <Col className="text-center d-flex justify-content-center"  sm={4}>
                            
                            <SearchBox marginTop={10} marginBottom={10} />
                            
                        </Col>
                        <Col className="text-right d-flex justify-content-end" sm={4}>
                            UserBar
                        </Col>
                    </Row>
                </Container>

            </Row>
        </Container>
    )
}
export default Header