const fs = require('fs');

const jsonData = { name: 'Employee 1 Name', salary: 2000 };
let jsonContent = JSON.stringify(jsonData);

// CREATE employees.json file
fs.writeFile('employees.json', jsonContent, 'utf-8', (err) => {
  if (err) console.log('there is an error while writing JSON obj');
  else console.log('JSON file has been saved');
});

// READ employees.json file
fs.readFile('./employees.json', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// UPDATE employees.json file
fs.readFile('./employees.json', 'utf-8', async (err, data) => {
  if (err) throw err;
  let readData = JSON.parse(data);
  readData.name = 'Employee 2 Name';
  readData.salary = 3000;
  let updatedData = JSON.stringify(readData);
  await fs.writeFile('employees.json', updatedData, 'utf-8', (err) => {
    if (err) console.log('there is an error while writing JSON obj');
    else console.log('JSON file has been saved');
  });
});

// DELETE employees.json file
fs.unlink('employees.json', (err) => {
  if (err) throw err;
  console.log('File has been deleted succesfully');
});
