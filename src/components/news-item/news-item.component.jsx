import React from 'react';
import './news-item.styles.scss';

const NewsItem = ({title, link, date}) => (
	<div className="news-item">
		<span className="date">{date}</span>
		<h3 className="title">{title}</h3>
		<a href={link} className="link">View Article..</a>
	</div>
)

export default NewsItem;