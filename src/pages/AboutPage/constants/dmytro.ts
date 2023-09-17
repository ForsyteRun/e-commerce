import photo from 'assets/images/jpg/dmytro.jpg';
import { DevelopersData, Role } from '../types';

const dmytro: DevelopersData = {
  name: 'Dmytro Markuntovych',
  image: photo,
  role: Role.developer,
  github: 'CarphatianSnake',
  about:
    "My name is Dmytro, I'm FrontEnd developer. I have serious intentions to develop further in this direction, moreover, it brings me great pleasure. I like that this specialization gives me new and new challenges and motivates me to constantly grow and develop. In my free time, I like to spend time in nature in forests and mountains, also I'm passionate about extreme mountain biking.",
  contribution: [
    'Project setup',
    'Routing',
    'Dynamic routing',
    'eCommerce interaction',
    'Authentication',
    'CRUD operations with API',
    'Redux store',
    'Catalog navigation',
    'Cart items layout',
    'Products sort',
    'Products search',
    'Breadcrumbs path generation',
    'Icon buttons',
    'Modify products quantity in cart',
    'Centralized navigation',
    'About us page',
    'Board managing',
    'Products adding',
  ],
};

export default dmytro;
