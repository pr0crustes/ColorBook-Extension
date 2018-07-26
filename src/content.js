
chrome.storage.sync.get(['pref_is_enabled'], function(result) {
    if (result.pref_is_enabled) {
        chrome.storage.sync.get(['pref_is_random'], function(result) {
            if (result.pref_is_random) {
                document.querySelectorAll('[role="banner"]')[0].style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
            } else {
                chrome.storage.sync.get(['pref_color'], function(result2) {
                    document.querySelectorAll('[role="banner"]')[0].style.backgroundColor = result2.pref_color;
                });
            }
        });
    }
});

