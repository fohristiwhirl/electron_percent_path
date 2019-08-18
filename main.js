"use strict";

const electron = require("electron");
const path = require("path");
const url = require("url");

require("./empty");		// Just to prove the main process can.

let win;

electron.app.on("ready", () => {
	win = new electron.BrowserWindow({
		webPreferences: {nodeIntegration: true}
	});
	win.loadURL(url.format({
		protocol: "file:",
		pathname: path.join(__dirname, "test.html"),
		slashes: true
	}));
});

electron.app.on("window-all-closed", () => {
	electron.app.quit();
});

console.log("Main process encountered no issues.\n");
