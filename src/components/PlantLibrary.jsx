
import PlantCard from './PlantCard';
import './PlantLibrary.css'; 
import './PlantCard.css';
import './PlantLibrary.css';
import aloveraImg from '../assets/AloeVera.jpg';
import SnakePlant from '../assets/Snake Plant.jpg';
import Monstera from '../assets/Monstera.jpg';
import PeaceLily from '../assets/Peace Lily.jpg'
import SpiderPlant from '../assets/SpiderPlant.jpg';
import FiddleLeafFig from '../assets/FiddleLeafFig.jpg';
import Pothos from '../assets/FiddleLeafFig.jpg';
import ZZPlant from '../assets/ZZPlant.jpg'
import RubberPlant from '../assets/RubberPlant.jpg'
import Croton from'../assets/Croton.jpg';
import BostonFern from '../assets/BostonFern.jpg';
import EnglishIvy from '../assets/EnglishIvy.jpg';
// import Jadeplant from '../assets/Jadeplant.jpg';
import Calathea from '../assets/Calathea.jpg';
import ChineseEvergreen from '../assets/ChineseEvergreen.jpg';
import BirdofParadise from '../assets/BirdofParadise.jpg';
import Dracaena from '../assets/Dracaena.jpg';
import Philodendron from '../assets/Philodendron.jpg';
import Kalanchoe from '../assets/Kalanchoe.jpg';
import Dieffenbachia from '../assets/Dieffenbachia.jpg'
import Schefflera from '../assets/Schefflera.jpg';
import Anthurium from '../assets/Anthurium.jpg';
import ParlorPalm  from '../assets/ParlorPalm.jpg';
import LuckyBamboo from '../assets/LuckyBamboo.jpg';
import Lavender from '../assets/Lavender.jpg';
import Mint from '../assets/Mint.jpg';
import Basil from '../assets/Basil.jpg';
import Rosemary from '../assets/Rosemary.jpg';



const plants = [
  { id: 1, name: 'Aloe Vera', description: 'Succulent known for healing properties.', environment:'indoors plant', image: aloveraImg },
  { id: 2, name: 'Snake Plant', description: 'Low-maintenance plant that purifies air.',environment:'indoors plant', image: SnakePlant },
  { id: 3, name: 'Monstera', description: 'Tropical plant with split leaves.',environment:'indoors plant', image: Monstera },
  { id: 4, name: 'Peace Lily', description: 'Beautiful white blooms, loves shade.', environment:'indoors plant', image: PeaceLily },
  { id: 5, name: 'Spider Plant', description: 'Easy-care plant with arching leaves.', environment:'indoors plant',image: SpiderPlant },
  { id: 6, name: 'Fiddle Leaf Fig', description: 'Trendy plant with large fiddle-shaped leaves.',environment:'indoors plant', image:FiddleLeafFig },
  { id: 7, name: 'Pothos', description: 'Trailing vine, great for beginners.', environment:'indoors plant',image: Pothos },
  { id: 8, name: 'ZZ Plant', description: 'Glossy leaves and drought tolerant.',environment:'indoors plant', image: ZZPlant },
  { id: 9, name: 'Rubber Plant', description: 'Bold dark green foliage.',environment:'indoors plant', image: RubberPlant },
  { id: 10, name: 'Croton', description: 'Colorful and vibrant leaves.',environment:'indoors plant', image: Croton },
  { id: 11, name: 'Boston Fern', description: 'Classic hanging plant with fronds.',environment:'indoors plant', image: BostonFern },
  { id: 12, name: 'English Ivy', description: 'Climbing vine, great for walls or baskets.', image: EnglishIvy },
  // { id: 13, name: 'Jade Plant', description: 'Symbol of prosperity, succulent type.', image: Jadeplant },
  { id: 14, name: 'Calathea', description: 'Beautifully patterned leaves.', environment:'indoors plant',image: Calathea },
  { id: 15, name: 'Chinese Evergreen', description: 'Easy-care tropical foliage.', image: ChineseEvergreen },
  { id: 16, name: 'Bird of Paradise', description: 'Large leaves, tropical vibes.', image: BirdofParadise },
  { id: 17, name: 'Dracaena', description: 'Spiky leaves, indoor air purifier.', image: Dracaena },
  { id: 18, name: 'Philodendron', description: 'Heart-shaped leaves, loves climbing.', image: Philodendron},
  { id: 19, name: 'Kalanchoe', description: 'Succulent with bright flowers.', image: Kalanchoe },
  { id: 20, name: 'Dieffenbachia', description: 'Large patterned leaves.', image: Dieffenbachia},
  { id: 21, name: 'Schefflera', description: 'Also called umbrella plant.', image: Schefflera },
  { id: 22, name: 'Anthurium', description: 'Bright red waxy flowers.', image: Anthurium},
  { id: 23, name: 'Parlor Palm', description: 'Pet-friendly and elegant.', image: ParlorPalm },
  { id: 24, name: 'Lucky Bamboo', description: 'Symbol of good fortune.', image: LuckyBamboo},
  { id: 25, name: 'Lavender', description: 'Fragrant and calming herb.', image: Lavender },
  { id: 26, name: 'Mint', description: 'Fresh herb, easy to grow.', image: Mint },
  { id: 27, name: 'Basil', description: 'Popular kitchen herb.', image: Basil },
  { id: 28, name: 'Rosemary', description: 'Woody herb, great for cooking.', image: Rosemary },
  // { id: 29, name: 'Oregano', description: 'Classic herb for Italian dishes.', image: Oregano },
  // { id: 30, name: 'Thyme', description: 'Low-growing herb.', image: 'https://via.placeholder.com/150?text=Thyme' },
  // { id: 31, name: 'Chives', description: 'Tasty and grassy herb.', image: 'https://via.placeholder.com/150?text=Chives' },
  // { id: 32, name: 'Dill', description: 'Feathery herb for pickling.', image: 'https://via.placeholder.com/150?text=Dill' },
  // { id: 33, name: 'Sage', description: 'Fragrant gray-green leaves.', image: 'https://via.placeholder.com/150?text=Sage' },
  // { id: 34, name: 'Lemon Balm', description: 'Lemony scent, part of mint family.', image: 'https://via.placeholder.com/150?text=Lemon+Balm' },
  // { id: 35, name: 'Chamomile', description: 'Calming tea flower.', image: 'https://via.placeholder.com/150?text=Chamomile' },
  // { id: 36, name: 'Cilantro', description: 'Essential in many cuisines.', image: 'https://via.placeholder.com/150?text=Cilantro' },
  // { id: 37, name: 'Tarragon', description: 'Anise-flavored herb.', image: 'https://via.placeholder.com/150?text=Tarragon' },
  // { id: 38, name: 'Fennel', description: 'Sweet, licorice-flavored bulb.', image: 'https://via.placeholder.com/150?text=Fennel' },
  // { id: 39, name: 'Bay Laurel', description: 'Used in stews and soups.', image: 'https://via.placeholder.com/150?text=Bay+Laurel' },
  // { id: 40, name: 'Eucalyptus', description: 'Aromatic silver leaves.', image: 'https://via.placeholder.com/150?text=Eucalyptus' },
  // { id: 41, name: 'Marigold', description: 'Vibrant orange and yellow blooms.', image: 'https://via.placeholder.com/150?text=Marigold' },
  // { id: 42, name: 'Sunflower', description: 'Tall and bright, follows the sun.', image: 'https://via.placeholder.com/150?text=Sunflower' },
  // { id: 43, name: 'Petunia', description: 'Common garden flower.', image: 'https://via.placeholder.com/150?text=Petunia' },
  // { id: 44, name: 'Begonia', description: 'Shade-loving flowering plant.', image: 'https://via.placeholder.com/150?text=Begonia' },
  // { id: 45, name: 'Geranium', description: 'Fragrant flower and foliage.', image: 'https://via.placeholder.com/150?text=Geranium' },
  // { id: 46, name: 'Chrysanthemum', description: 'Fall-blooming ornamental.', image: 'https://via.placeholder.com/150?text=Chrysanthemum' },
  // { id: 47, name: 'Orchid', description: 'Exotic flowers, often epiphytic.', image: 'https://via.placeholder.com/150?text=Orchid' },
  // { id: 48, name: 'Daffodil', description: 'Early spring yellow flower.', image: 'https://via.placeholder.com/150?text=Daffodil' },
  // { id: 49, name: 'Tulip', description: 'Classic bulb flower.', image: 'https://via.placeholder.com/150?text=Tulip' },
  // { id: 50, name: 'Hyacinth', description: 'Fragrant spring flowers.', image: 'https://via.placeholder.com/150?text=Hyacinth' },
];







const PlantLibrary = () => {
  const addToGarden = (plant) => {
    let garden = JSON.parse(localStorage.getItem('myGardenPlants')) || [];
    if (!garden.find(p => p.id === plant.id)) {
      garden.push(plant);
      localStorage.setItem('myGardenPlants', JSON.stringify(garden));
      alert(`${plant.name} added to your garden!`);
    } else {
      alert(`${plant.name} is already in your garden.`);
    }
  };

  return (
    <div>
      <h2>Plant Library </h2>
    <div className="plant-library">
      
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          
          onAdd={addToGarden}
        />
      ))}
    </div>
    </div>
  );
};

export default PlantLibrary;

