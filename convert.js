const fs = require('fs');
const readline = require('readline');

const inputFile = 'eve.json';
const outputFile = 'data.json';

async function processLineByLine() {
  const fileStream = fs.createReadStream(inputFile);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const jsonArray = [];

  for await (const line of rl) {
    try {
      const jsonObject = JSON.parse(line);
      jsonArray.push(jsonObject);
    } catch (e) {
      console.error('Error parsing JSON:', e);
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(jsonArray, null, 2));
  console.log(`Converted JSON array written to ${outputFile}`);
}

processLineByLine();
