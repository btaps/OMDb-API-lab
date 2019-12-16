import React, { Component } from 'react'
import Movies from './Movies'

class SearchContainer extends Component {
  state = {
    movieTitle: '',
    arrayOfTitles: []
  }
  
  onSubmit = (e) =>{
    let searchString = this.state.movieTitle.trim()
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s="${searchString}"&apikey=9881f046`)
        .then(res => res.json())
        .then(data => this.setState({ arrayOfTitles: data.Search }) )
	.catch(err => console.log('Could not fetch all movies with search', err))
  }
  onChange = (e) =>{
    this.setState({ movieTitle: e.target.value})
  }
	
  render(){
    return( 
	   <form onSubmit={this.onSubmit}>
              <h4> Search for a Movie!</h4>
	      <input 
		  onChange={this.onChange}
	          type='text'
		  placeholder='Write Movie Title Here....' /> 
	      <button type='submit'>Search</button>
		   { 
		      this.state.arrayOfTitles !== undefined
		     ? <Movies movies={this.state.arrayOfTitles} />
		     : (alert('No movies found!'), this.setState({ arrayOfTitles: [] }) )

		   }
		    
	    </form>	    
    )
  }
}

export default SearchContainer

