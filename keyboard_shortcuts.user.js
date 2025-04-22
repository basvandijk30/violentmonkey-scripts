// ==UserScript==
// @name        Keyboard Shortcuts
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       GM_openInTab
// @version     1.0
// @author      Bas van Dijk
// @description My custom keyboard shortcuts
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// ==/UserScript==
const { register } = VM.shortcut;

VM.shortcut.register('alt-u', () => {
    // Duplicate current tab.
    GM_openInTab(window.location.href, { active: true, insert: true });
});

VM.shortcut.register('alt-shift-f', () => {
    // Open new tab and search Google for selected text.
    // Useful in combination with Caret Browsing or Vimium visual mode.
    if ((selection = window.getSelection().toString())) {
        GM_openInTab('https://www.google.com/search?q=' + encodeURIComponent(selection), { active: true, insert: true });
    }
});

VM.shortcut.register('alt-shift-p', () => {
    // Proxy current tab through 12ft.io (bypass paywalls).
    window.location = 'https://12ft.io/proxy?q=' + window.location;
});

console.log('Violentmonkey: Keyboard Shortcuts loaded');
