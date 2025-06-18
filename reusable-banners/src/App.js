import './App.css';
import Banner from './components/Banner';

const BannerCardsList = [
  {
  id:1,
  headerText:"The Seasons Latest",
  descriptionText:"Get the seasons all details list",
  classname:"card-1"
  },
   
  {
  id:2,
  headerText:"The Seasons Latest",
  descriptionText:"Get the seasons all details list",
  classname:"card-2"
  },
  {
  id:3,
  headerText:"The Seasons Latest",
  descriptionText:"Get the seasons all details list",
  classname:"card-3"
  }
]
const App = () => (
  <div className='app-container'>
    <ul className='banner-card-list'>
        {BannerCardsList.map((eachItem) => (
          <Banner bannercarddetails = {eachItem}/>
        ))
      }
      
    </ul>
  </div>
  
    
  
)
  


export default App;
