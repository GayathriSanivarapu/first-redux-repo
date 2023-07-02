import { useDispatch,useSelector } from 'react-redux'
import { ageIncre, decrement, increment } from './myReducer';
import { useNavigate, useNavigation } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const countIncrement = useSelector((state)=>state.myReducer.count)

  const ageInc = useSelector(state=>state.myReducer.age)


  const onIncrement = () => {
    dispatch(increment())
    navigation('/about')
  }
  const onDecrement = () => {
    dispatch(decrement())
    navigation('/about')

  }

  const ageIncr = () => {
    dispatch(ageIncre())
  }

  return (
    <div>
      {countIncrement}
      <button onClick={onIncrement}>increment</button> 
      <button onClick={onDecrement}>decrement</button> 
<p>
  <button onClick={ageIncr}>age</button>{ageInc}
</p>
    </div>
  );
}

export default Home;