const { db, Campuses, Students } = require('./server/db');
const { green, red } = require('chalk');

const campuses = [
  {
    name: 'Silver Millenium',
    imageUrl: '/images/Campuses/Galaxia_Courtyard.jpg',
    address: '5 Moonlight Rd, Earth',
    description: 'Home to our main scouts',
  },
  {
    name: 'Galaxia Courtyard',
    imageUrl: '/images/Campuses/Outer_System_Courtyard.jpg',
    address: '3 Starlight Rd, Far Away Galaxy',
    description: 'Home to the newly transferred',
  },
  {
    name: 'Outer System Courtyard',
    imageUrl: '/images/Campuses/Silver_Millenium.jpg',
    address: '4 Milkyway Lane, Solar System',
    description: 'Home to our highest achieving',
  },
];

const students = [
  {
    firstName: 'Usagi',
    lastName: 'Tsukino',
    email: 'Usagi.Tsukino@sailormoon.com',
    imageUrl: '/images/students/Moon.jpg',
    gpa: '2.2',
    description: 'Leader of the squad',
    campusId: '1',
  },
  {
    firstName: 'Ami',
    lastName: 'Mizuno',
    email: 'Ami.Mizuno@sailormoon.com',
    imageUrl: '/images/students/Mercury.jpg',
    gpa: '4',
    description: 'Brain of the squad',
    campusId: '1',
  },
  {
    firstName: 'Gurio',
    lastName: 'Umino',
    email: 'Gurio.Umino@sailormoon.com',
    imageUrl: '/images/students/Umino.jpg',
    gpa: '3.3',
    description: 'Weirdo',
    campusId: '2',
  },
  {
    firstName: 'Kino',
    lastName: 'Makoto',
    email: 'Kino.Makoto@sailormoon.com',
    imageUrl: '/images/students/Jupiter.jpg',
    gpa: '3.5',
    description: 'Strongest of the squad',
    campusId: '1',
  },
  {
    firstName: 'Hotaru',
    lastName: 'Tomoe',
    email: 'Hotaru.Tomoe@sailormoon.com',
    imageUrl: '/images/students/Saturn.jpg',
    gpa: '3.4',
    description: 'Deadliest of the squad',
    campusId: '3',
  },
  {
    firstName: 'Setsuna',
    lastName: 'Meioh',
    email: 'Setsuna.Meioh@sailormoon.com',
    imageUrl: '/images/students/Pluto.jpg',
    gpa: '2.8',
    description: 'Caretaker of the squad',
    campusId: '3',
  },
  {
    firstName: 'Seiya',
    lastName: 'Kou',
    email: 'Seiya.Kou@sailormoon.com',
    imageUrl: '/images/students/Seiya.jpg',
    gpa: '3.5',
    description: 'New transfer student',
    campusId: '2',
  },
];

const seed = async () => {
  await Promise.all(campuses
    .map(async campus => {
      await Campuses.create(campus);
    })
    .concat(
      students.map(async student => {
        await Students.create(student);
      })
    ))

  await db.sync();
  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
