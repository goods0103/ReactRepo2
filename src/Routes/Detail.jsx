import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
// import styled from "styled-components";

// let YellowButton = styled.button`
//   background : ${ props => props.bg};
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
//   padding : 10px;
// `;

{/* <input> 하나 만들고 거기에 유저가 숫자 말고 다른걸 입력하면

"그러지마세요"라는 안내메세지를 출력해봅시다.

굳이 그럴 필요는 없겠지만 오늘 배운 useEffect 써보는게 어떨까요.

(팁) 모르는건 검색해봐야합니다. */}

const Detail = (props) => {
    let {id} = useParams();
    let copy = props.shoes.find((v) => v.id == id)
    let [time,setTime] = useState(true);
    let [num,setNum] = useState('');
    
    useEffect(()=> {
      let a = setTimeout(()=>{setTime(false)},2000);
      return () =>{
        // clean up function
        clearTimeout(a)
      }
    },[]);

    useEffect(()=>{
      isNaN(num) == true ?  
      alert("그러지마세요"): null
    }, []);

    return (
      <div className="container">
        {/* <YellowButton bg="yellow">button</YellowButton> */}
        {
          time == true ? <YellowBox setTime={setTime}/> : null
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
            <input type="text" onChange={ (e) =>{
              setNum(e.target.value)
            }
            }></input>
          </div>
        </div>
      </div>
    )
  }
  let YellowBox = () => {
    return(
      <div className="YellowBox">네모난 박스</div>
    )
  }
  export default Detail