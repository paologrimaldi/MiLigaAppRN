import {DataT} from '../../types';

const data: DataT[] = [
  {
    id: 1,
    name: 'Nacho Fernandez',
    isOnline: true,
    match: '78',
    description:
      'Defensa central, puedo jugar de lateral izquierdo y a perfil cambiado.',
    message: 'Que onda como estas?.',
    image: require('../images/01.jpg'),
  },
  {
    id: 2,
    name: 'Lionel Messi',
    match: '93',
    description:
      'No juego nada y camino en el campo pero soy famoso y puedo llevar plata a tu equipo.',
    isOnline: false,
    message: 'Hola che..',
    image: require('../images/02.jpg'),
  },
  {
    id: 3,
    name: 'Cristiano Ronaldo',
    match: '45',
    description: 'Soy el mejor jugador de todos los tiempos Siuuuuu.',
    isOnline: false,
    message: 'Me dicen el bicho, donde jugamos?',
    image: require('../images/03.jpg'),
  },
  {
    id: 4,
    name: 'Marco Pappa',
    match: '88',
    description:
      'Golpeo mujeres pero en el campo soy bastante limpio para jugar.',
    isOnline: true,
    message: 'Que pumas compadre.',
    image: require('../images/04.webp'),
  },
  {
    id: 5,
    name: 'Vinicius Junior',
    match: '76',
    description: 'Sou un buon jiugador y eu puedo bailar samba en o campo.',
    isOnline: false,
    message: 'Hola amigo.',
    image: require('../images/05.jpg'),
  },
  {
    id: 6,
    name: 'Iker Casillas',
    match: '95',
    description:
      'Fui portero del real madrid y puedo jugar en tu equipo si no molestan a mi mujer en el campo.',
    isOnline: true,
    message: 'Joder tio como vais.',
    image: require('../images/06.jpg'),
  },
  {
    id: 7,
    name: 'Alisha Lehmann',
    match: '67',
    description: 'Me gusta jugar con hombres y se jugar sucio cuando toca.',
    isOnline: true,
    message: 'Hey como estas guapo?',
    image: require('../images/07.jpg'),
  },
  {
    id: 8,
    name: 'Roberto Carlos',
    match: '85',
    description: 'Le pego duro a la pelota y puedo jugar con vos.',
    age: '27',
    location: 'Irvine, CA',
    info1: 'Straight, Single, 5"10',
    info2: 'Tea Totaller, Loves Photography & Travel',
    info3: 'Beaches, Mountain, Cafe, Movies',
    info4: 'Last seen: 23h ago',
    isOnline: true,
    message: 'Hola soy Roberto.',
    image: require('../images/08.jpg'),
  },
  {
    id: 9,
    name: 'El Samba',
    match: '74',
    description:
      'Hola me dicen el samba y juego de contención, me cuesta patear pero soy trozo.',
    isOnline: true,
    message: 'Que dice flaco como vas.',
    image: require('../images/09.jpg'),
  },
  {
    id: 10,
    name: 'El Viktor',
    match: '98',
    description: 'Me gusta la chela y ya no juego mucho pero tengo dribling.',
    isOnline: false,
    message: 'Hola.',
    image: require('../images/10.jpg'),
  },
];

export default data;
