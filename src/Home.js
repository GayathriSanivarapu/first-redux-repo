import { useDispatch,useSelector } from 'react-redux'
import { ageIncre, decrement, increment } from './myReducer';
import { useNavigate, useNavigation } from 'react-router-dom';
import { ageIncrement,ageDecrement,idIncrement, idDecrement } from './myReducer1';
function Home() {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const countIncrement = useSelector((state)=>state.myReducer.count)

  const ageInc = useSelector(state=>state.myReducer.age)
  const ageIncre=useSelector(state=>state.dinga.age)
  const idIncre=useSelector(state=> state.dinga.id)

  const onIncrement = () => {
    dispatch(increment())
  }
  const onDecrement = () => {
    dispatch(decrement())
    navigation('/about')

  }

  const ageIncr = () => {
    dispatch(ageIncre())
  }
  const onIncre = () =>{
    dispatch(ageIncrement())
  }
  const onDecre = ()=>{
    dispatch(ageDecrement())
  }
  const idInc =()=>{
    dispatch(idIncrement())
  }
  const idDecre =() =>{
    dispatch(idDecrement())
  }

  return (
    <div>
      {countIncrement}
      <button onClick={onIncrement}>increment</button> 
      <button onClick={onDecrement}>decrement</button> 
<p>
  <button onClick={ageIncr}>age</button>{ageInc}
</p>
 <div>
  {ageIncrement}
  <button onClick={onIncre}>ageIncrement</button>{ageIncre}
  <button onClick={onDecre}>ageDecrement</button>
  <p>
  <button onClick={idInc}>idIncrement</button>{idIncre}
  <button onClick={idDecre}>idDecrement</button>
  </p>
 </div>
    </div>
  );
}

export default Home;