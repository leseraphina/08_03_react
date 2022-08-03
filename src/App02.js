import React,{useEffect, useState} from 'react'
import ReviewList from './components/ReviewList'
// import mockItems from './mock.json'
import { getReviews } from './api';

function App(){
  const [order,setOrder] = useState('createdAt')
  const [items,setItems] = useState([])

  const sortItmes = items.filter((item)=> {
    return `${item}.{order}` === 'rating'

  })
  
  const handleNewestClick  = ()=> {
    setOrder('rating')
  }
  const handleBestClick = ()=> setOrder('rating')

  const handleDelete = (id) => {
    const nextItems = items.filter((item)=>  item.id !== id)
    setItems(nextItems)
  }

  const handleLoad = async (orderQuery) => {
    const { reviews } = await getReviews(orderQuery);
    setItems(reviews);
  };
  useEffect(()=>{handleLoad(order)},[order])
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      {/* ㅂㅓ트ㄴ 지지우우기 */}
      {/* <button onClick={handleLoadClick}>불러오기</button> */}
      <ReviewList 
        items = {sortItmes}
        onDelect = {handleDelete}
        />
    </div>
  )
}
export default App;
