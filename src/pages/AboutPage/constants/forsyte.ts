import photo from 'assets/images/jpg/forsyte.jpg';
import { DevelopersData, Role } from '../types';

const forsyte: DevelopersData = {
  name: 'Alexandr Dripa',
  image: photo,
  role: Role.lead,
  github: 'ForsyteRun',
  about:
    'My name is Alexand and I am a frontend developer with a passion for creating user-friendly and visually appealing web applications. With experience in HTML, CSS, JavaScript, and popular frontend frameworks like React, I am adept at turning design concepts into responsive and interactive websites. I am also skilled in optimizing web performance and ensuring cross-browser compatibility',
  contribution: [
    'Registration Page',
    'Display Basket Items',
    'Recalculate Total Cost Cart',
    'Apply Promo Code and Display Updated Prices',
    'Empty Cart Message',
    'Implement user password change',
    'Implement addresses managing',
  ],
};

export default forsyte;
