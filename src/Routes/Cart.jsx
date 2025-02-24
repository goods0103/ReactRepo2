import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../store.js';

// **오늘의 숙제 :**

// 하단에 있는 데이터를 Redux store 안에 보관해둡시다.

// 그리고 Cart.js 페이지에 가져와서 데이터바인딩해봅시다.

// 데이터 갯수에 맞게 표 생성해달라고 반복문쓰는 것도 좋을듯요

// **숙제용 장바구니 데이터**



const Cart = () => {
    let state = useSelector((state) => { return state })
    const dispatch = useDispatch()
    console.log(state)
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{state.cart[i].id}</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td>안녕</td>
                                </tr>

                            )
                        }
                        )
                    }
                </tbody>
            </Table>
            <button onClick={()=>{
                dispatch(changeName(state.cart))
                console.log(state)
            }}>state 이름 변경</button>
        </>
    )
}
export default Cart;