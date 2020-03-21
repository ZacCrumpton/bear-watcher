import util from "../helpers/utils.js"
import getBears from "../helpers/data/bearFormData.js"



const bearDomStringBuilder = () => {
    let allBears = getBears.getBears()
    let domString = '';
    allBears.forEach((bear) => {
        domString += `<div class="col-4">`
        domString += `<div id="${bear.id}" class="bearCard card">`
        domString += `<img src="${bear.imgUrl}" class="card-img-top bear-photo" alt="image-of-bear">`
        domString += `<div class="card-body">`;
        domString += `<h2 class="card-title" id="bear-name">${bear.name}</h2>`;
        domString += '</div>';        
        domString += `<button class="btn btn-danger catchFishBtn" id="${bear.id}">Catch Fish</button>`
        domString += '</div>';
        domString += '</div>';      
    });
    util.printToDom('bearRiverContainer', domString);
};



export default { bearDomStringBuilder }