import React from 'react';
import PropTypes from 'prop-types';
import './news-list.styles.scss';
import NewsItem, { ItemPropType } from '../news-item/news-item.component';

const NewsList = ({ newsItems, handleBookMark, title }) => (
  <div className="news-list-container">
    {
      title
        ? <h2>{title}</h2>
        : null
    }
    <div className="news-list">
      {
        newsItems
          ? newsItems.map(
            (item) => (
              <NewsItem
                key={item.title}
                item={item}
                handleBookMark={handleBookMark}
              />
            ),
          )
          : null
      }
    </div>
  </div>
);

NewsList.propTypes = {
  newsItems: PropTypes.arrayOf(ItemPropType).isRequired,
  handleBookMark: PropTypes.func,
  title: PropTypes.string,
};

NewsList.defaultProps = {
  title: '',
  handleBookMark: () => null,
};

export default NewsList;
