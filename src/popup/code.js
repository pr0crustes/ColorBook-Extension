window.onload = (function () {
    linkHandlers();
    loadPrefs();
});

function linkHandlers() {
    document.getElementById("button-save").onclick = savePrefs;
    document.getElementById("button-reset").onclick = resetPrefs;
}

function loadPrefs() {

    chrome.storage.sync.get(['pref_is_enabled'], function(result) {
        document.getElementById("pref_is_enabled").checked = result.pref_is_enabled;
    });

    chrome.storage.sync.get(['pref_is_random'], function(result) {
        document.getElementById("pref_is_random").checked = result.pref_is_random;
    });
    
    chrome.storage.sync.get(['pref_color'], function(result) {
        document.getElementById("pref_color").jscolor.fromString(result.pref_color);
    });
}

function savePrefs() {
    chrome.storage.sync.set({'pref_is_enabled': document.getElementById("pref_is_enabled").checked});
    chrome.storage.sync.set({'pref_is_random': document.getElementById("pref_is_random").checked});
    chrome.storage.sync.set({'pref_color': document.getElementById("pref_color").jscolor.toHEXString()});
}

function resetPrefs() {
    chrome.storage.sync.set({'pref_is_enabled': false});
    chrome.storage.sync.set({'pref_is_random': false});
    chrome.storage.sync.set({'pref_color': "4267b2"});
    loadPrefs();
}
