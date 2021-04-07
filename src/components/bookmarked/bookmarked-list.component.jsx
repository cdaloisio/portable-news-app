import React from 'react';
import './bookmarked.styles.scss';
import NewsItem from '../news-item/news-item.component.jsx';

const NewsList = ({newsItems}) => (
	<div className="bookmarked-container">
		<h2>Bookmarked Items</h2>
		<div className="bookmarked-list">
			
			{	
				newsItems 
					? newsItems
						.map(
							(item, index) => {
								return(
									<NewsItem key={index} item={item} />
								)
							}
						)
					: null
			}
		</div>
	</div>
)

export default NewsList;