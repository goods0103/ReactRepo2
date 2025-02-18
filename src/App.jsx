import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import data from './data.js';
import Detail from './Routes/Detail.jsx'
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  const [shoes] = useState(data)
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={
          <>
            <div>main
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
              <Link to="/detail">상세페이지</Link>
              <Link to="/about">about</Link>
              <Row>
                {
                  shoes.map((a, i) => {
                    return (
                      <Col sm>
                        <ProductComp shoes={shoes[i]} let i={i + 1} />
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/about" element={<div>about</div>} />
      </Routes>
    </div>
  )
}
const ProductComp = (props) => {
  return (
    <>
      <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </>
  )
}

export default App
