const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';
const DATE = moment().subtract(1, 'd').format();

const data = {
  date: DATE
};

jsonfile.writeFile(FILE_PATH, data).then(async () => {
  const git = simpleGit();

  await git.add(FILE_PATH);
  await git.commit(DATE, { '--date': DATE });
  await git.push();  // <-- this was missing the await!
}).catch(err => console.error('Error:', err));

