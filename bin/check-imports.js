#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const chalk = require('chalk');

fs.readFile('./src/static/css/main.css', 'utf8', (error, data) => {
  const filenames = fs
    .readdirSync('./src/static/css/')
    .map((file) => path.basename(file));

  for (const filename of filenames) {
    if (filename !== 'main.css' && !data.includes(`@import "${filename}";`)) {
      console.error(chalk.red(`Error: "${filename}" not imported.`));
      process.exit(1);
    }
  }

  console.log(chalk.green('Success! All files are imported.'));
  process.exit();
});
