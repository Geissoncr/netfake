import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
    state = {
        filmes: [],
    }

    async componentDidMount(){
        
      const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=e5693481ef000bfdd855a0f21ad39631&language=en-US`);
          this.setState({filmes: res.data.results});
        console.log(res.data.results);
          
    }
    pegaImage = filme => {
        // console.log(`http://image.tmdb.org/t/p/w500${filme.poster_path}`);
        // const img = await axios.get(`http://image.tmdb.org/t/p/w500${filme.poster_path}`);
        return `http://image.tmdb.org/t/p/w500${filme.poster_path}`;
    }

    render() {
        return (

            <div>
                <p>Quantidade de Filmes da Lista: </p>
                {this.state.filmes.map((item, index)=>
                    {
                        return(
                            <div key={index} style={{}}>
                                <img src={this.pegaImage(item)} />
                                {/* <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} /> */}
                                <p>{item.title}</p>
                                <p>{item.overview}</p>
                            </div>


                        )
                    })}
            </div>
        )
    }
}

export default Home;