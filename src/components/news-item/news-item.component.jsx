import React from 'react';
import './news-item.styles.scss';

const NewsItem = ({item, handleBookMark}) => {
	const {title, link, date, newsSource} = item;
	const showBookmarked = (typeof handleBookMark === 'function');

	return (
		<div className="news-item">
			<div className="news-item__header">
				<p className="">{newsSource}</p>
			</div>
			<div className="news-item__body">
				<span className="date">{date}</span>
				<h3 className="title">{title}</h3>
				<a href={link} className="link">View Article..</a>
				{
					showBookmarked
					? <button onClick={() => handleBookMark(item)}>Bookmark</button>
					: null
				}
			</div>
		</div>
	)
};

export default NewsItem;