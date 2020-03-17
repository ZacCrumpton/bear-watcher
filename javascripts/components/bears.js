import utils from '../helpers/utils.js';

const bearFormBuilder = () => {
  let domString = '';
  domString += '<form class="d-flex justify-content-around">';
  domString += '<form class="col-6">';
  domString += '<div id="newBear" class="form-group">';
  domString += '<label for="bearName">Name</label>';
  domString += '<input type="email" class="form-control" id="bearNameInput" aria-describedby="bearName">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="image-url">Image URL</label>';
  domString += '<input type="imageURL" class="form-control" id="imageUrlInput">';
  domString += '</input></div>';
  domString += '<button type="submit" id="bearFormSubmit" class="bearFormBtn btn btn-primary">Submit</button>';
  domString += '</form>';
  utils.printToDom('bearForm', domString);
};

export default { bearFormBuilder };
