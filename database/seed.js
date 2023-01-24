const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const db = require('./db.js');

const seedPath = join('database', 'schema.sql');
const seed = readFileSync(seedPath, 'utf8');
db.exec(seed);
console.log('Database seeded with base data.');
