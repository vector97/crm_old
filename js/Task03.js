'use strict';

console.log('%cЗадача №3', background);

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = ([...arr], prefix) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${prefix} ${arr[i]}`
  }

  return arr;
};

console.log(addPrefix(names, 'Mr'));
