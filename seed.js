const { db, Campuses, Students } = require('./server/db');
const { green, red } = require('chalk');

const campuses = [
  {
    name: 'Silver Millenium',
    imageUrl: '/images/Campuses/Galaxia_Courtyard.jpg',
    address: '5 Moonlight Rd, Earth',
    description:
      'Culpa exercitation sit duis elit veniam aute irure sit do. Amet officia fugiat non ipsum anim incididunt enim magna aute ea et qui. Reprehenderit elit ipsum eiusmod nostrud sunt proident excepteur esse magna cupidatat excepteur incididunt. Minim excepteur cupidatat id mollit et eu laboris officia qui irure nisi.',
  },
  {
    name: 'Galaxia Courtyard',
    imageUrl: '/images/Campuses/Outer_System_Courtyard.jpg',
    address: '3 Starlight Rd, Far Away Galaxy',
    description:
      'Laboris qui qui sint cupidatat cillum duis. Consectetur exercitation cillum ipsum duis sit elit velit dolor. Et incididunt laborum sunt culpa aute consectetur qui. Laborum irure incididunt anim ad aliqua labore et sint dolore aute nulla nisi veniam. Deserunt in laboris pariatur pariatur. Est aliqua nisi adipisicing velit voluptate pariatur non. Commodo veniam in reprehenderit labore aliquip laborum et occaecat labore sint sunt culpa.',
  },
  {
    name: 'Outer Star Campus',
    imageUrl: '/images/Campuses/Silver_Millenium.jpg',
    address: '4 Milkyway Lane, Solar System',
    description:
      'Eiusmod officia ex culpa laborum exercitation dolor. Ut in ea adipisicing adipisicing consectetur qui tempor occaecat occaecat et. Do consectetur et non eiusmod anim sunt commodo incididunt aliquip nisi exercitation deserunt velit in. Officia culpa esse mollit minim eiusmod aliqua mollit nostrud est et irure officia irure. Id velit exercitation ut eiusmod duis quis nulla amet. Non irure mollit esse consequat ea Lorem commodo elit.',
  },
];

const students = [
  {
    firstName: 'Usagi',
    lastName: 'Tsukino',
    email: 'Usagi.Tsukino@sailormoon.com',
    imageUrl: '/images/students/Moon.jpg',
    gpa: 2.2,
    description:
      'Duis Lorem irure mollit anim reprehenderit minim mollit. Minim irure dolore excepteur minim ea ea irure. Velit voluptate est labore consequat qui non id. Lorem voluptate laboris eiusmod cillum sit commodo. Magna anim anim nisi mollit. Sint laborum anim magna sit. Consequat esse enim fugiat occaecat.',
    campusId: 1,
  },
  {
    firstName: 'Ami',
    lastName: 'Mizuno',
    email: 'Ami.Mizuno@sailormoon.com',
    imageUrl: '/images/students/Mercury.jpg',
    gpa: 4,
    description:
      'Minim est enim cupidatat nisi ex non eiusmod non velit irure nisi enim quis labore. Culpa culpa proident quis dolor ad. Sit minim nisi esse irure commodo. Mollit commodo deserunt aute elit nisi ipsum incididunt aliquip. Non Lorem commodo sit laboris nisi amet ea non consectetur nisi. Consequat velit culpa ullamco dolore. Adipisicing nostrud consequat exercitation velit sint nisi do labore labore voluptate fugiat labore quis sit.',
    campusId: 1,
  },
  {
    firstName: 'Gurio',
    lastName: 'Umino',
    email: 'Gurio.Umino@sailormoon.com',
    imageUrl: '/images/students/Umino.jpg',
    gpa: 3.3,
    description:
      'Deserunt pariatur ipsum dolor dolore sunt magna et incididunt non quis quis sit. Fugiat irure sunt sit nostrud. Ea nisi ut enim anim consequat voluptate occaecat ut nulla est ex incididunt consequat mollit. Ipsum fugiat minim adipisicing Lorem sit in nulla cupidatat. Exercitation ullamco sint dolore labore mollit nostrud. Duis incididunt sint reprehenderit laboris magna eiusmod amet qui irure ea consequat eiusmod voluptate consectetur.',
    campusId: 2,
  },
  {
    firstName: 'Kino',
    lastName: 'Makoto',
    email: 'Kino.Makoto@sailormoon.com',
    imageUrl: '/images/students/Jupiter.jpg',
    gpa: 3.5,
    description:
      'Culpa exercitation sit duis elit veniam aute irure sit do. Amet officia fugiat non ipsum anim incididunt enim magna aute ea et qui. Reprehenderit elit ipsum eiusmod nostrud sunt proident excepteur esse magna cupidatat excepteur incididunt. Minim excepteur cupidatat id mollit et eu laboris officia qui irure nisi.',
    campusId: 1,
  },
  {
    firstName: 'Hotaru',
    lastName: 'Tomoe',
    email: 'Hotaru.Tomoe@sailormoon.com',
    imageUrl: '/images/students/Saturn.jpg',
    gpa: 3.4,
    description:
      'Minim est enim cupidatat nisi ex non eiusmod non velit irure nisi enim quis labore. Culpa culpa proident quis dolor ad. Sit minim nisi esse irure commodo. Mollit commodo deserunt aute elit nisi ipsum incididunt aliquip. Non Lorem commodo sit laboris nisi amet ea non consectetur nisi. Consequat velit culpa ullamco dolore. Adipisicing nostrud consequat exercitation velit sint nisi do labore labore voluptate fugiat labore quis sit.',
    campusId: 3,
  },
  {
    firstName: 'Setsuna',
    lastName: 'Meioh',
    email: 'Setsuna.Meioh@sailormoon.com',
    imageUrl: '/images/students/Pluto.jpg',
    gpa: 2.8,
    description:
      'Minim est enim cupidatat nisi ex non eiusmod non velit irure nisi enim quis labore. Culpa culpa proident quis dolor ad. Sit minim nisi esse irure commodo. Mollit commodo deserunt aute elit nisi ipsum incididunt aliquip. Non Lorem commodo sit laboris nisi amet ea non consectetur nisi. Consequat velit culpa ullamco dolore. Adipisicing nostrud consequat exercitation velit sint nisi do labore labore voluptate fugiat labore quis sit.',
    campusId: 3,
  },
  {
    firstName: 'Seiya',
    lastName: 'Kou',
    email: 'Seiya.Kou@sailormoon.com',
    imageUrl: '/images/students/Seiya.jpg',
    gpa: 3.5,
    description:
      'Culpa exercitation sit duis elit veniam aute irure sit do. Amet officia fugiat non ipsum anim incididunt enim magna aute ea et qui. Reprehenderit elit ipsum eiusmod nostrud sunt proident excepteur esse magna cupidatat excepteur incididunt. Minim excepteur cupidatat id mollit et eu laboris officia qui irure nisi.',
    campusId: '2',
  },
];

const seed = async () => {
  await Promise.all(
    campuses
      .map(async campus => {
        await Campuses.create(campus);
      })
      .concat(
        students.map(async student => {
          await Students.create(student);
        })
      )
  );

  await db.sync();
  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
