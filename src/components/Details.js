import React from 'react'
import {setDisplayArticle, deleteDisplayArticle} from '../redux/slices/displayArticleSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayArticleSlice.js'

const Details = () => {
  const displayArticle = useSelector(selectDisplay)
  return (
    <div>
      <h1>{displayArticle.title}</h1>

      <img src={displayArticle.urlToImage}/>

      <p>{displayArticle.content}</p>

      <a href={displayArticle.url} target='_blank'>See full article</a>

    </div>
  )
}

export default Details