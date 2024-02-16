import data from "./data.js"
import Card from "./Card"

import './App.css';

function App() {
  return (
    <div className="App">
      <header>MY TRAVEL JOURNAL</header>
      {data.map(
        function(item){
          console.log(item , '<<<<item')
          return (
            <Card 
            id ={item.id}
            // {...item}
            imageUrl ={item.imageUrl}
            location ={item.location}
            googleMapsUrl = {item.googleMapsUrl}
            startDate = {item.startDate}
            endDate = {item.endDate}
            description = {item.description}
          
            />

          )
        }
      )    
      }

    </div>
  );
}

export default App;
