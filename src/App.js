import data from "./data.js"
import Card from "./Card"

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src="./planet.png" />
        <h1>my travel journal.</h1>
        </header>
      {data.map(
        function(item){
          console.log(item , '<<<<item')
          return (
            <Card 
            id ={item.id}
            {...item}
            // imageUrl ={item.imageUrl}
            // location ={item.location}
            // googleMapsUrl = {item.googleMapsUrl}
            // startDate = {item.startDate}
            // endDate = {item.endDate}
            // description = {item.description}
            // item = {item}
          
            />

          )
        }
      )    
      }

    </div>
  );
}

export default App;
