class ending {
    constructor(element, number) {
        this.element = element;
        this.number = number - 1; 
    }
};
const urlBeginnings = ["https://", "http://"];
let urlEndings = [".com", ".net", ".org"];
let addressInput;
let urlStartIndex;
let urlFinishIndex;
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.clear(function(){
        let error = chrome.runtime.lastError;
        if (error) {
            console.error("There was an error initialising the sync storage")
        }
    });
});
chrome.omnibox.onInputEntered.addListener(function(text) {
    addressInput = text;
    console.log(addressInput)
    for (let i = 0; i < urlBeginnings.length; i++) {
        if (addressInput.indexOf(urlBeginnings[i]) !== -1) {
            urlStartIndex = addressInput.indexOf(urlBeginnings[i]);
        };
    };
    for (let i = 0; i < urlEndings.length; i++) {
        urlEndings[i] = new ending(urlEndings[i], urlEndings[i].length)
        if (addressInput.indexOf(urlEndings[i].element) !== -1) {
            urlFinishIndex = addressInput.indexOf(urlEndings[i].element) + urlEndings[i].number;
        };
    };
    addressInput = addressInput.slice(urlStartIndex, urlFinishIndex + 1)
    console.log(addressInput)
    chrome.storage.sync.set({addressInput})
    chrome.tabs.create({
        url: addressInput
    });
});