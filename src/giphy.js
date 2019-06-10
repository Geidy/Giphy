import React,{Component} from 'react';

const giphy = (props) =>{

            
            return(
            
                
                <div>
                    {props.giphyObject.map(giphyObject =>(
                     <div key={giphy.RecordNumber} className="container">

                      <label>{this.props.Search}</label> <br />
                      <label>{this.props.Filter}</label> <br />

                    
                        <h1>gif Objects: {giphy.giphyObject}</h1>
                        <button  onClick={this.handleSubmit}>Reg Search</button>
                        <button  onClick={this.handleSubmit}>Trend Search</button>
                        <button  onClick={this.handleSubmit}>Rand Search Search</button>
                    </div>

                    )) 
          
                };
                </div>
            )
        
    
}


export default giphy;  




