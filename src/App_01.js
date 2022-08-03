import React,{useState} from 'react'
import ReviewList from './components/ReviewList'
// import mockItems from './mock.json'
import { getReviews } from './api';

function App(){
  const [order,setOrder] = useState('createdAt')
  const [items,setItems] = useState([])
  const sortItmes = items.sort((a,b) => b[order] -a[order])
  const handleNewestClick  = ()=> setOrder('createdAt')
  const handleBestClick = ()=> setOrder('rating')
  const handleDelete = (id) => {
    const nextItems = items.filter((item)=>  item.id !== id)
    setItems(nextItems)
  }
  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };
  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <button onClick={handleLoadClick}>불러오기</button>
      <ReviewList 
        items = {sortItmes}
        onDelect = {handleDelete}
        />
    </div>
  )
}
export default App;
