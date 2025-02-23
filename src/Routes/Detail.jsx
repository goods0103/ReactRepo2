import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

// import styled from "styled-components";

// let YellowButton = styled.button`
//   background : ${ props => props.bg};
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
//   padding : 10px;
// `;

const Detail = (props) => {
  let { id } = useParams();
  let copy = props.shoes.find((v) => v.id == id)
  let [time, setTime] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => { setTime(false) }, 2000);
    return () => {
      // clean up function
      clearTimeout(a)
    }
  }, []);

  useEffect(() => {
    isNaN(num) == true ?
      alert("그러지마세요") : null
  }, [num]);

  return (
    <>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => { setTab(1) }} >버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}></TabContent>
      <div className="container">
        {/* <YellowButton bg="yellow">button</YellowButton> */}
        {
          time == true ? <YellowBox setTime={setTime} /> : null
        }
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{copy.title}</h4>
            <p>{copy.content}</p>
            <p>{copy.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <input type="text" onChange={(e) => {
              setNum(e.target.value)
            }
            }></input>
          </div>
        </div>
      </div>
    </>
  )
}
let TabContent = (props) => {
  {
    if(props.tab==0){
      return(
        <div>내용0</div>
      )
    }
    if(props.tab==1){
      return(
        <div>내용1</div>
      )
    }
    if(props.tab==2){
      return(
        <div>내용2</div>
      )
    }
  }
}

let YellowBox = () => {
  return (
    <div className="YellowBox">네모난 박스</div>
  )
}
export default Detail