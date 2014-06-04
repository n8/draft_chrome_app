
onload = function() {
  focusWebview();
};

onblur = function() {
  focusWebview();
};

focusWebview = function() {
  var webview = document.querySelector('webview');
  webview.focus();
};
