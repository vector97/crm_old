'use strict';

const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green';
console.log('%cЗадача №1', background);


const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudents, failedStudents) => {
  const successStudents = [];

  for (let i = 0; i < allStudents.length; i++) {
    if (!(failedStudents.includes(allStudents[i]))) {
      successStudents.push(allStudents[i])
    }
  }

  return successStudents;
};

console.log(filter(allStudents, failedStudents));
