export const fetchGuardianNews = (searchQuery) => {
	//const API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;
	const API_KEY = '6704205c-0ebf-492a-bb46-ee7a5a07b4e4';
	return fetch(`https://content.guardianapis.com/search?q=${searchQuery}&api-key=${API_KEY}`)
      	.then(response => response.json())
      	.then(
      		(result) => { 
      			let items = [];

      			if(result.response.status === 'ok'){
	      			result.response.results.map(item => {
	      				items.push(
		      				{	
		      					newsSource: 'The Guardian',
		      					title: item.webTitle,
		      					link: item.webUrl,
		      					date: item.webPublicationDate
		      				}
		      			);
	      			});
	      		}
      			return items;
       		},
			(error) => {
          		console.log(error)
        	}
      	)
	
}

export const fetchNytimesNews = (searchQuery) => {
	//const API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;
	const API_KEY = 'UkDK2cbaGJO4Uq8EyXGjkykGuBwCNn6X';
	return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${API_KEY}`)
      	.then(response => response.json())
      	.then(
      		(result) => { 
      			let items = [];

      			if(result.status === 'OK'){
	      			result.response.docs.map(item => {
	      				items.push(
		      				{	
		      					newsSource: 'NY times',
		      					title: item.abstract,
		      					link: item.web_url,
		      					date: item.pub_date
		      				}
		      			);
	      			});
	      		}
      			return items;
       		},
			(error) => {
          		console.log(error)
        	}
      	)
	
}