import formBuilder from "./components/bears.js"
import bearBuilder from "./components/river.js"


const catchFish = (e) => {
    alert(`${e.target.id} tried to catch a fish!`)
    
};

const init = () => {
    formBuilder.bearFormDomStringBuilder();
    bearBuilder.bearDomStringBuilder();
    $('body').on('click', '.catchFishBtn', catchFish);
}

init();