const activeButton = document.getElementById("switch");



activeButton.addEventListener('input', async function(){
    if (activeButton.value === "off") {
     activeButton.value = "on";
     chrome.omnibox.addEventListener('hashchange', )
     // https://computerrock.com/en/blog/html5-changing-the-browser-url-without-refreshing-page
    };
    if (activeButton.value === "on") {
        activeButton.value = "off";
       };
});
