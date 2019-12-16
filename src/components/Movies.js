import React, {Component} from 'react'
import Movie from './Movie'

class Movies extends Component {
  
  createAllMovies = () =>{
    let movie = this.props.movies.map((movie, index) =>{
	    return <Movie movie = {movie} key = {index} />
     })
    return movie
  }

  render(){
    return(
	 <div>
	    {this.createAllMovies()}
         </div>
    )
  }
}

export default Movies
