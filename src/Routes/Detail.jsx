import { useParams } from "react-router-dom"
import styled from "styled-components";

let YellowButton = styled.button`
  background : ${ props => props.bg};
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`;

const Detail = (props) => {
    let {id} = useParams();
    let copy = props.shoes.find((v) => v.id == id)
    return (
      <div className="container">
        <YellowButton bg="yellow">button</YellowButton>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{copy.title}</h4>
            <p>{copy.content}</p>
            <p>{copy.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    )
  }
  export default Detail