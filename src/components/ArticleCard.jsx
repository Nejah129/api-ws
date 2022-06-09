import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ArticleCard = ({article}) => {
    // console.log(article)
  return (
    <div  className='article'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  className='pic' src={article.urlToImage}/>
  <Card.Body>
    <Card.Title className='cardTitle'>{article.title}</Card.Title>
    <div className='article-over'>

    <Card.Text className='cardText'>
      {article.description}
    </Card.Text>
    <Link to={`/article/${article.title}`}>
    <Button variant="primary">Read article</Button>
    
    </Link>
    </div>
  </Card.Body>
</Card>
    </div>
  )
}

export default ArticleCard