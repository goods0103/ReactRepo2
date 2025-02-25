import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { changeState , addAge } from '../store.js';

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
                                    <button>+</button>
                                </tr>

                            )
                        }
                        )
                    }
                </tbody>
            </Table>
            <button onClick={()=>{
                dispatch(changeState())
            }}>id 변경</button>
            <button onClick={()=>{
                dispatch(addAge(10))
                console.log(state.user)
            }}>id 변경</button>
        </>
    )
}
export default Cart;