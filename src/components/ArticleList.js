import React from 'react'
import ArticleCard from './ArticleCard'

const ArticleList = ({articles}) => {
    // console.log(articles)
  return (
    <div className='articleList'>{
        articles&&React.Children.toArray(articles.map(article=><ArticleCard article={article}/>))
    }</div>
  )
}

export default ArticleList