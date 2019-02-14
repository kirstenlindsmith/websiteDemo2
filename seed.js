const { db } = require('./server/db');
const { green, red } = require('chalk');
const { Student, Campus } = require('./server/db/models');

const students = [
  {
    firstName: 'Sora',
    lastName: '♥',
    email: 'sora@destinyislands.com',
    imageUrl:
      'https://www.kh13.com/uploads/monthly_2018_10/large.gallery_61785_2263_210142.png.5d73aefb67486503ea8ffdb198b01561.png',
    gpa: 2.9,
    campusId: 1,
  },
  {
    firstName: 'Riku',
    lastName: '♥',
    email: 'riku@destinyislands.com',
    imageUrl: 'https://i.imgur.com/sNPPTFq.png',
    gpa: 4.0,
    campusId: 1,
  },
  {
    firstName: 'Kairi',
    lastName: '♥',
    email: 'kairi@destinyislands.com',
    imageUrl:
      'https://content.web-repository.com/s/00851955021093902/uploads/Tier_8_Medals/DtPfUIHU4AEdkFS-4070563.png',
    gpa: 3.9,
    campusId: 1,
  },
  {
    firstName: 'Roxas',
    lastName: '♡',
    email: 'roxas@organization13.com',
    imageUrl:
      'https://www.kh13.com/uploads/monthly_2019_01/large.1190849674_supernovahdven.png.824147c2756486e727872b0827580dcb.png',
    gpa: 4.0,
    campusId: 3,
  },
  {
    firstName: 'Axel',
    lastName: '♡',
    email: 'axel@organization13.com',
    imageUrl:
      'https://www.kh13.com/uploads/monthly_2018_10/large.gallery_61785_2358_326570.png.515886180524f5466a0861af8a3d9867.png',
    gpa: 3.2,
    campusId: 3,
  },
  {
    firstName: 'Mickey',
    lastName: 'Mouse',
    email: 'kingmickey@disneycastle.com',
    imageUrl:
      'https://www.kh13.com/uploads/monthly_2018_10/c0d97133983cdfbc3e6d90564888dd71.png.fe74923a35568b0a62e8f957383529fc.png',
    gpa: 4.0,
    campusId: 2,
  },
  {
    firstName: 'Goofy',
    lastName: 'Goof',
    email: 'goofy@disneycastle.com',
    imageUrl: 'https://i.imgur.com/av0Pbpp.png',
    gpa: 3.4,
    campusId: 2,
  },
  {
    firstName: 'Donald',
    lastName: 'Duck',
    email: 'donald@disneycastle.com',
    imageUrl: 'https://i.imgur.com/NVDiQEQ.png',
    gpa: 3.7,
    campusId: 2,
  },
];

const campuses = [
  {
    name: 'Destiny Islands',
    imageUrl: 'https://i.imgur.com/S8KRLX7.jpg',
    address: 'Middle of the Ocean',
    description:
      'An idyllic paradise for dreamers to grow before starting off on their heroic journeys. No adults, apparently. All fun and games, all the time!',
  },
  {
    name: 'Disney Castle',
    imageUrl: 'https://i.imgur.com/C9AIlUc.jpg',
    address: 'Somewhere in Space',
    description:
      'A quaint little castle, housing all your nostalgic favorites. Inventors of fun technologies like spaceships, cellphones, and ornamental garden decor.',
  },
  {
    name: 'Organization XIII',
    imageUrl: 'https://i.imgur.com/6eTEyBQ.png',
    address: 'Hidden in Darkness',
    description:
      'An evil place for evil, or misguided, people. Come for the power, stay for the sea salt ice cream.',
  },
];

const seed = async () => {
  await db.sync({ force: true });

  await Promise.all(
    campuses.map(campus => {
      return Campus.create(campus);
    })
  );

  await Promise.all(students.map(student => {
    return Student.create(student)
  }));

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
