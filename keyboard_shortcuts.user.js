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
    // Open the current page in a new tab (duplicate tab)
    GM_openInTab(window.location.href, { active: true, insert: true });
});
