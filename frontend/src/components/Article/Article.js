import React from 'react'
import './Article.css'

const Article = ({ props }) => {
    return (
        <div className='article-card'>
            <div className='article-card-image'>
                <img src={props.image} className='article-image' alt='featured article' />
            </div>
            <div class="article-card-content">
                <h4 className='article-title'>{props.article_title}</h4>
                <p className='article-details'>
                    {props.article_content}
                </p>
            </div>
        </div>
    )
}

export default Article;