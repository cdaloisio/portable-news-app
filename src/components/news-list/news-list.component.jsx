import React from 'react';
import './news-list.styles.scss';
import NewsItem from '../news-item/news-item.component.jsx';

const NewsList = ({newsItems, handleBookMark}) => (
	<div className="news-list">
		{	
			newsItems 
				? newsItems
					.map(
						(item, index) => {
							return(
								<NewsItem key={index} item={item} handleBookMark={handleBookMark} />
							)
						}
					)
				: null
		}
	</div>
)

export default NewsList;