import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Row>
        <Col sm>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col sm>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col sm>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
      </Row>
    </div>
  )
}

export default App
