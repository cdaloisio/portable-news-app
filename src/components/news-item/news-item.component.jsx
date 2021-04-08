import React from 'react';
import PropTypes from 'prop-types';
import './news-item.styles.scss';

const NewsItem = ({ item, handleBookMark }) => {
  const {
    title, link, date, newsSource,
  } = item;
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
            ? <button type="button" onClick={() => handleBookMark(item)}>Bookmark</button>
            : null
        }
      </div>
    </div>
  );
};

export const ItemPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  newsSource: PropTypes.string.isRequired,
}).isRequired;

NewsItem.propTypes = {
  item: ItemPropType,
  handleBookMark: PropTypes.func.isRequired,
};

NewsItem.defaultProps = {
  item: {
    title: '',
    link: '',
    date: '',
    newsSource: '',
  },
};

export default NewsItem;
