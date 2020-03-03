import util from '../helpers/utils.js'

const riverBuilder = (bear) => {
    let domString = '';
    for(let i = 0; i < bear.length; i++){
        domString += `<div class="card" style="width: 18rem;">`
        domString += `<img src="..." class="card-img-top" alt="...">`
        domString += `<div class="card-body">`
        domString +=  `<h5 class="card-title">Card title</h5>`
        domString += `</div>`
        domString += `</div>`
    };
    util.printToDom('riverBuilderDiv', domString);
};

export default { riverBuilder }