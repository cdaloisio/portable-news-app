import React from 'react';

// components
import NewsList from '../../components/news-list/news-list.component';
import SearchField from '../../components/search-field/search-field.component';

// api
import { fetchGuardianNews, fetchNytimesNews } from '../../api/fetch';

class SearchPage extends React.Component {
  constructor() {
    super();

    this.state = {
      newsItems: [],
      bookmarkedItems: [],
      searchField: '',
    };

    this.handleBookMark = this.handleBookMark.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleApiFetch = this.handleApiFetch.bind(this);
  }

  handleApiFetch() {
    const { searchField } = this.state;

    Promise.allSettled([
      fetchGuardianNews(searchField),
      fetchNytimesNews(searchField),
    ]).then((responses) => {
      let newsItems = [];
      responses.forEach((response) => {
        newsItems = newsItems.concat(response.value);
      });
      this.setState({ newsItems });
    });
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
    this.handleApiFetch();
  }

  handleBookMark(item) {
    const { bookmarkedItems } = this.state;
    bookmarkedItems.push(item);

    this.setState({ bookmarkedItems });
  }

  render() {
    const { newsItems, bookmarkedItems } = this.state;
    return (
      <div className="search-page">
        <h1>News App</h1>
        <SearchField placeholder="Search News" handleChange={this.handleChange} />
        <NewsList newsItems={bookmarkedItems} title="Bookmarked" />
        <NewsList newsItems={newsItems} handleBookMark={this.handleBookMark} />
      </div>
    );
  }
}

export default SearchPage;
