import _ from 'lodash';

const obj = {
  firstName: 'Saurav',
  lastName: 'Biswas'
};

function component() {
  const mappedObj = { ...obj, age: 20};
  const element = document.createElement('div');
  console.log('Printing Mapped Obj ', mappedObj);

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());