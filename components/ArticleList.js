import React from 'react'
import ArticleItem from './ArticleItem'
import articleStyle from '../styles/Article.module.css'


function ArticleList({articles}) {
  return (
    <div className={articleStyle.grid}>
      {articles.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList