import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import data from './data.js';
import Detail from './Routes/Detail.jsx'
import About from './Routes/Event.jsx'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'


// 버튼을 누르면 서버에서 상품데이터 3개를 가져와서

// 메인페이지에 상품카드 3개를 더 생성해봅시다.

// (팁) 리액트에선 html을 3개 더 생성해주세요~라고 코드짜지 않는다고 했습니다.

// state 조작하면 html 알아서 생성될걸요

function App() {
  let navigate = useNavigate()
  const [shoes, setshoes] = useState(data)
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

      <Routes>
        <Route path="/" element={
          <> 
            <div>
              <div className='main-bg'></div>
              <Link to="/detail/0">상세페이지</Link>
              <Button variant="primary" onClick={() => { navigate("/event") }}>about</Button>
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
            <button onClick={()=> {
              let copy = [...shoes];
              copy.sort((a,b)=>{return b.id-a.id});
              setshoes(copy);
              console.log(copy);
              }}>정렬버튼</button>
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((data)=>{
                console.log(data)
                let data2 = [...shoes]
                setshoes([...data2, data])
                console.log(shoes);
              })
              .catch(()=>{
                console.log("err");
              })
            }}>데이터 가져오기</button>
          </>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="/event" element={<About></About>} >
          <Route path="one" element={<div>첫번째 이벤트</div>} />
          <Route path="two" element={<div>두번째 이벤트</div>} />
        </Route>
        <Route path="*" element={<div>404</div>} />
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
