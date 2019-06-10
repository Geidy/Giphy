import React from 'react';
import './App.css';
import axios from 'axios';
import Giphy from './giphy';

class App extends React.Component{
  constructor(props){
  super(props);

  this.state = {
    giphyObjects: [],
    found: false
     }
  }
  GiphySearch = ( event ) => {
    event.preventDefault();
    let userInput = event.target.value;
    //userInput = userInput.toUpperCase();    //Convert the text to upper case
    console.log(userInput);

    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=IFiOBe3WNWNUx3mgxLlgEhqv4vUtpY6P'+userInput)
    .then( (resolve) => {   
      this.setState( {giphy: resolve.data} );
      console.log(resolve.data);
    })
    .catch( (err)=> console.log(err));
  }


    


render() {
  let elems = []; 

  elems = this.state.giphyObjects.map((elem) => <Giphy{...elem} />)
  return (

    <div className="container">
      <nav class="navbar navbar-dark bg-primary" >
  <span class="navbar-text justify-content-center">
    <strong><h3><p>Giphy / Trending</p>
    <p>TTP-Pipeline Bootcamp/Cuny 2X</p></h3></strong>
  </span>
</nav>

      <div class="row justify-content-center">
        <div class="col-md-4">        
     
        <form class="center" onSubmit={this.GiphySearch}>  
        
        <label><h2>Giphy Search</h2>
        <input type="text" onChange={this.GiphySearch} />
        
        <button onClick={this.handleSubmit}>Trending Search</button>
        </label>
      </form>
      </div>
      </div>

    { <giphy giphyObjects={this.state.giphyObjects}/> }
    
    </div>
  );

}


}



export default App;
