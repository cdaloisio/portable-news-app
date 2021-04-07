import React from 'react';
import './news-list.styles.scss';
import NewsItem from '../news-item/news-item.component.jsx';

const NewsList = ({newsItems}) => (
	<div className="news-list">
		{	
			newsItems ?
				newsItems
					.map(
						(item, index) => {
							return(
								<NewsItem key={index} {...item} />
							)
						}
					)
				: null
		}
	</div>
)

export default NewsList;