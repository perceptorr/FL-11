let rootNode = document.getElementById('root');
rootNode.style.margin = '0 5%';

let createdList = createList();

function createList () {
  const header = document.createElement('h1');
  header.textContent = 'TODO Cat List';

  rootNode.appendChild(header);

  const notification = document.createElement('p');
  notification.innerHTML = 'Maximum item per list are created';

  rootNode.appendChild(notification);

  const adder = document.createElement('div');

  rootNode.appendChild(adder)

  const adderInput = document.createElement('input');
  adderInput.setAttribute('placeholder', 'Add new action');
  
  adder.appendChild(adderInput);

  const adderImage = document.createElement('i');
  adderImage.classList.add('material-icons');
  adderImage.innerHTML = 'add_box';

  adder.appendChild(adderImage);

  const line = document.createElement('hr');
  
  rootNode.appendChild(line)

  const list = document.createElement('div');
  list.classList.add('list');

  rootNode.appendChild(list);

  return {
    notification: notification,
    adderInput: adderInput,
    adderImage: adderImage,
    list: list
  }
}

function createEditImage() {
  let editImage = document.createElement('i');
  editImage.classList.add('material-icons');
  editImage.classList.add('edit')
  editImage.innerHTML = 'create';

  return editImage
}

function createDeleteImage() {
  let deleteImage = document.createElement('i')
  deleteImage.classList.add('material-icons');
  deleteImage.classList.add('delete')
  deleteImage.innerHTML = 'delete';

  return deleteImage
}

function createSaveImage() {
  let changeSaver = document.createElement('i')
  changeSaver.classList.add('material-icons');
  changeSaver.classList.add('save');
  changeSaver.innerHTML = 'save';
  
  return changeSaver
}

