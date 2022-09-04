const activeButton = document.getElementById("switch");



activeButton.addEventListener('input', async function(){
    if (activeButton.value === "off") {
     activeButton.value = "on";
     chrome.omnibox.addEventListener('hashchange', )
    };
    if (activeButton.value === "on") {
        activeButton.value = "off";
       };
});
