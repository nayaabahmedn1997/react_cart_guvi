
import './App.css';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';



const data = [
  {
    isOnSale: true,
    imageURL:"https://rukminim2.flixcart.com/image/850/1000/ksw4ccw0/poster/d/a/s/medium-anime-naruto-poster-asstore-anm3-original-imag6c86hxng4szh.jpeg?q=90&crop=false",
    productName:"Naruto Poster 1",
    actualPrice: 20.00,
    salePrice: 18.00
  },
  {
    isOnSale: true,
    imageURL:"https://naruto-official.com/special/anime_gallery/anime-gallery2.webp",
    productName:"Naruto Poster 2",
    actualPrice: 50.00,
    salePrice: 25.00
  },
  {
    isOnSale: false,
    imageURL:"https://i.pinimg.com/736x/3c/17/13/3c171372e2ef27248f5f99e66231e1d9.jpg",
    productName:"Naruto Poster 3",
    salePrice: 40.00
  },
  {
    isOnSale: true,
    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkahEKz8JAKMoxNKdjXQugNGiwupYuF04qdQ&s",
    productName:"Naruto Poster 4",
    actualPrice: 50.00,
    salePrice: 25.00
  },
  {
    isOnSale: false,
    imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8ay-HqpniM5G0VbgH5iQugRcp7VCfAg8Sw&s",
    productName:"Naruto Poster 5",
    salePrice: 40.00
  },
  {
    isOnSale: true,
    imageURL:"https://static.vecteezy.com/system/resources/thumbnails/028/627/081/small_2x/watercolor-anime-character-high-quality-illustration-vector-background-photo.jpg",
    productName:"Naruto Poster 6",
    salePrice: 40.00
  },

];

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Content  data={data}/>


    </div>
  );
}

export default App;
