import util from "../helpers/utils.js";
import bearBuilder from "./river.js";
import bearData from "../helpers/data/bearFormData.js";

const bearFormDomStringBuilder = () => {
    let domString = '';
    domString += '<div class="d-flex justify-content-around align-items-start">'
    domString += '<form id="bearForm">';
    domString += '<div class="form-group">';
    domString += '<input type="text" class="form-control" id="bearName" aria-describedby="bearName" placeholder="Enter Bear Name">';
    domString += '</div>';
    domString += '<div class="form-group">';
    domString += '<input type="text" class="form-control" id="bearImg" placeholder="Image Url">';
    domString += '</div>';
    domString += '<button type="submit" class="btn btn-primary text-align-center d-flex" id="bear-submit-button">Submit</button>';
    domString += '</form>';
    domString += '</div>';
    util.printToDom('bearFormContainer', domString);
    $('#bear-submit-button').click(submitForm);
};

const submitForm = (e) => {
    e.preventDefault();
    const bears = bearData.getBears();
    const brandNewBear = {
        id: `bear${bears.length + 1}`,
        name: $('#bearName').val(),
        imgUrl: $('#bearImg').val()
    };
    bears.push(brandNewBear);
    bearBuilder.bearDomStringBuilder(bears);
    $('#bearForm').trigger('reset');
}

export default { bearFormDomStringBuilder }