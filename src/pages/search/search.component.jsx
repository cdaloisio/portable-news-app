import React from 'react';
import './search.styles.scss';

//components
import NewsList from '../../components/news-list/news-list.component';
import SearchField from '../../components/search-field/search-field.component.jsx';

//api
import { fetchGuardianNews, fetchNytimesNews } from '../../api/fetch.js';

class SearchPage extends React.Component{
	constructor(){
		super();

		this.state = {
			newsItems: [],
			bookmarkedItems: [],
			searchField: ""
		}

		this.handleBookMark = this.handleBookMark.bind(this)
	}

	handleApiFetch(){
		const { searchField } = this.state;
	
		Promise.allSettled([ fetchGuardianNews(searchField), fetchNytimesNews(searchField) ]).then((responses) => {
			let newsItems = [];
			responses.forEach(response => {
				newsItems = newsItems.concat(response.value)
			});

	      	this.setState({ newsItems: newsItems });
	 	});		
	}

	componentDidMount() {
		this.handleApiFetch();  	
	}

	handleChange = e => {
		this.setState({searchField:e.target.value}, () => {
	        this.handleApiFetch();  
	    });
	}

	handleBookMark(item){
		const bookmarkedItems = this.state.bookmarkedItems;
		bookmarkedItems.push(item)

		this.setState({bookmarkedItems: bookmarkedItems});
	}
	
	render(){
  		const { newsItems, searchField, bookmarkedItems } = this.state;
  		//const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
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