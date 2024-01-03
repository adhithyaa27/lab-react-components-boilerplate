import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Header from './components/header';
import Body from './components/body'
import imageData from './components/imageDataComponent';

function App() {
  return (
    <div>
      <Header/>
      <Body imageData={imageData}/>
      <GallaryFooter/> 
    </div>
  )
}
export default App;