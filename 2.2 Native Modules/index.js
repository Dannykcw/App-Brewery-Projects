const fs = require('fs');

fs.writeFile("2.2 Native Modules\\message.txt', 'Hello from NodeJS!\nHello from Angela!", (err, data) => {
  if (err) throw err
  console.log(data);
});

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data);
});

