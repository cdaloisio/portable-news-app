import React from 'react';
import './news-item.styles.scss';

const NewsItem = ({title, link, date, newsSource}) => (
	<div className="news-item">
		<div className="news-item__header">
			<p className="">{newsSource}</p>
		</div>
		<div className="news-item__body">
			<span className="date">{date}</span>
			<h3 className="title">{title}</h3>
			<a href={link} className="link">View Article..</a>
			<button>Bookmark</button>
		</div>
	</div>
)

export default NewsItem;