import React, {Component} from 'react'

class Movie extends Component {
  
  state = {
      img: '',
      actors: '',
      
  }	
movieTitle = this.props.movie.Title


  componentDidMount = () =>{

   }
      
  render(){
      fetch(`http://www.omdbapi.com/?i=${this.props.movie.imdbID}&apikey=9881f046`)
                        .then(res => res.json())
		        .then( data => this.setState({
			    img: data.Poster,
			    actors: data.Actors
			}))
                        .catch(err => console.log('Could not fetch single movie data for actors', err))
	return(
	  <div key = {this.props.movie.key}>
		  <span> Movie Title: <strong>{this.props.movie.Title}</strong> </span>
		  <p> Main Actors: <strong>{this.state.actors}</strong></p>
	      <img className = 'img'src={this.state.img} alt={`No poster of movie '${this.movieTitle}' provided`}/>
	        
	</div>
          )
	}
}

export default Movie
