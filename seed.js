const { db, Clothing } = require('./server/db');
const { green, red } = require('chalk');

const Clothes = [
  {name: 'Stylish Top', type: 'top', warmness: 'light', color: 'red'},
  {name: 'Cropped Jeans', type: 'bottom', warmness: 'heavy', color: 'blue'},
  {name: 'Old Socks', type: 'accessory', warmness: 'light', color: 'green'},
];

const seed = async () => {
  await Promise.all(
    Clothes
      .map(async singleClothing => {
        await Clothing.create(singleClothing);
      })
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
