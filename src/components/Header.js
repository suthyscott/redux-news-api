import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import { setPotentialArticles, deletePotentialArticles } from '../redux/slices/potentialArticlesSlice'
import { useDispatch, useSelector } from 'react-redux'
const {REACT_APP_API_KEY} = process.env

const Header = () => {
  const [searchInput, setSearchInput] = useState('')
  let dispatch = useDispatch()


  const handleSearch = (e) => {
    e.preventDefault()
    axios.get(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${REACT_APP_API_KEY}`)
     .then(res => {
      console.log(res.data)
      dispatch(deletePotentialArticles())
      dispatch(setPotentialArticles(res.data.articles))
     })
  }

  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/details'>Details</NavLink>

      <form onSubmit={e => handleSearch(e)}>
        <input onChange={e => setSearchInput(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Header