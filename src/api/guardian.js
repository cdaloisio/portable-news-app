const fetchGuardianNews = (searchQuery) => {
	return fetch(`https://content.guardianapis.com/search?q=${searchQuery}&api-key=6704205c-0ebf-492a-bb46-ee7a5a07b4e4`)
      	.then(response => response.json())
      	.then(
      		(result) => { 
      			let items = [];

      			if(result.response.status === 'ok'){
	      			result.response.results.map(item => {
	      				items.push(
		      				{	
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

export default fetchGuardianNews;