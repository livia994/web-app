// src/data/cookies.js
import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';
import c5 from '../assets/images/c5.jpg';
import c6 from '../assets/images/c6.jpg';
import c7 from '../assets/images/c7.jpg';
import c8 from '../assets/images/c8.jpg';
import c9 from '../assets/images/c9.jpg';
import c10 from '../assets/images/c10.jpg';

export const cookies = [
  {
    id: '1',
    name: 'Chocolate Chip',
    description: 'Classic, chewy, and loaded with chocolate chips.',
    price: 2.49,
    image: c1,
    category: 'classic',
    likes: 156,
    featured: true
  },
  {
    id: '2',
    name: 'Oatmeal Raisin',
    description: 'A healthy, hearty treat with oats and raisins.',
    price: 2.29,
    image: c2,
    category: 'classic',
    likes: 98,
    featured: false
  },
  {
    id: '3',
    name: 'Peanut Butter',
    description: 'Rich, nutty, and irresistibly smooth.',
    price: 2.49,
    image: c3,
    category: 'classic',
    likes: 132,
    featured: true
  },
  {
    id: '4',
    name: 'Double Chocolate',
    description: 'Chocolate cookies with chocolate chips. Double the pleasure!',
    price: 2.79,
    image: c4,
    category: 'specialty',
    likes: 187,
    featured: true
  },
  {
    id: '5',
    name: 'White Chocolate Macadamia',
    description: 'Creamy white chocolate with crunchy macadamia nuts.',
    price: 2.99,
    image: c5,
    category: 'specialty',
    likes: 142,
    featured: false
  },
  {
    id: '6',
    name: 'Snickerdoodle',
    description: 'Soft cookies with a hint of cinnamon and sugar coating.',
    price: 2.29,
    image: c6,
    category: 'classic',
    likes: 85,
    featured: false
  },
  {
    id: '7',
    name: 'Gingerbread',
    description: 'Warm spiced cookies perfect for the holiday season.',
    price: 2.49,
    image: c7,
    category: 'seasonal',
    likes: 78,
    featured: false
  },
  {
    id: '8',
    name: 'Lemon Sugar',
    description: 'Bright, refreshing lemon-flavored sugar cookies.',
    price: 2.59,
    image: c8,
    category: 'specialty',
    likes: 94,
    featured: false
  },
  {
    id: '9',
    name: 'Pumpkin Spice',
    description: 'Fall favorite with pumpkin and warm spices.',
    price: 2.79,
    image: c9,
    category: 'seasonal',
    likes: 112,
    featured: true
  },
  {
    id: '10',
    name: 'Cookie Party Pack',
    description: '24 mini cookies perfect for parties and events. Available in classic and specialty flavors.',
    price: 4.99,
    image: c10,
    category: 'specialty',
    likes: 205,
    featured: true
  }
  
];
