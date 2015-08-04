var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

require('crash-reporter').start();

var mainWindow = null;

app.on('ready', function() {

  mainWindow = new BrowserWindow({
  	"width": 800, 
  	"height": 600, 
  	"min-width": 480,
  	"min-height": 600,
  	"center": true,
  	"auto-hide-menu-bar": true
  });

  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});