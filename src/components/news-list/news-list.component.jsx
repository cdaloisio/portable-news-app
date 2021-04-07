import React from 'react';
import './news-list.styles.scss';
import NewsItem from '../news-item/news-item.component.jsx';

const NewsList = ({newsItems, handleBookMark, title}) => (
	<div className="news-list-container">
		{
			title
			? <h2>{title}</h2>	
			:null
		}
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
	</div>
)

export default NewsList;