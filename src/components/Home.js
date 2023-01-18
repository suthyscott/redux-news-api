import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {selectPotentials} from '../redux/slices/potentialArticlesSlice'
import {setDisplayArticle, deleteDisplayArticle} from '../redux/slices/displayArticleSlice.js'
import './Home.css';
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const potentialArticles = useSelector(selectPotentials)
  const navigate = useNavigate()
  console.log(potentialArticles)

  const handleDetailClick = article => {
    dispatch(deleteDisplayArticle())
    dispatch(setDisplayArticle(article))
    navigate('/details')
  }

  const articlesDisplay = potentialArticles.map(article => {
    return (
      <div className='article-tile-container'>
        <h1>{article.title}</h1>
        <img src={article.urlToImage}/>
        <button onClick={() => handleDetailClick(article)}>See Details</button>
      </div>
    )
  })
  return (
    <div className='article-tiles-container'>
      {articlesDisplay}
    </div>
  )
}

export default Home