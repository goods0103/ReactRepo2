import { useParams } from "react-router-dom"

const Detail = (props) => {
    let {id} = useParams();
    let copy = props.shoes.find((v) => v.id == id)
    console.log()
    return (
      <div className="container">
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