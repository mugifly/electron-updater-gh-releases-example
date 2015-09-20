/**
 * An example app for electron-updater-gh-releases
 */
'use strict';

var app = require('app'), dialog = require('dialog');
var BrowserWindow = require('browser-window');

// Read a manifest of the app
var manifest = require(__dirname + '/package.json');

// Do self test if needed
var Updater = require('electron-updater-gh-releases');
Updater.doSelfTestIfNeeded();

// Make an instance of Updater
var updater = new Updater({
	appVersion: manifest.version,
	execFileName: 'example',
	releaseFileNamePrefix: 'example-',
	ghAccountName: 'mugifly',
	ghRepoName: 'electron-updater-gh-releases-example'
});

// This method will be called when Electron has done initialization
var mainWindow = null;
app.on('ready', function() {

	mainWindow = new BrowserWindow({width: 640, height: 480});
	mainWindow.loadUrl('file://' + __dirname + '/app.html');
	mainWindow.on('closed', function() {
		mainWindow = null;
	});

	//  Check whether there is newer version
	updater.checkUpdateAvailable(function(is_available, version_str, assets, error_str) {

		if (error_str) {
			dialog.showErrorBox('Error occured', error_str);
			app.quit();
			return;
		} else if (!is_available) {
			dialog.showMessageBox(null, {
				title: 'Your app is latest',
				message: 'An update is not available.\nThis app is latest: v' + version_str,
				buttons: ['OK']
			});
			app.quit();
			return;
		}

		// Notify newer version to user
		var response = dialog.showMessageBox(null, {
			title: 'Update available',
			message: 'An update is available.\nWould you like to update for v' + version_str + '?',
			buttons: ['OK', 'Cancel']
		});
		if (response != 0) { // Canceled
			app.quit();
			return;
		}

		// Update to newer version
		updater.update(version_str, assets, function(is_success, error_str) {

			if (error_str) {
				dialog.showErrorBox('Error occured', error_str);
				app.quit();
				return;
			}

			dialog.showMessageBox(null, {
				type: 'info',
				title: 'Updating to v' + version_str,
				message: 'A new version has been downloaded.\nThe app will restart.',
				buttons: ['OK']
			});

		});

	});

});
