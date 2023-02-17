var readlineSync = require('readline-sync');
console.log('Student Managerment');
  menu = ['Show all student', 'Create student and return Menu ', 'Delete student', 'Edit student', 'Find student by name','Sort student by name ascending ','Sort student by age ascending ','Exit'],
  index = readlineSync.keyInSelect(menu, 'your chose?');

  const fs = require('fs-extra')
