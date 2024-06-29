"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("node:path");
if (require("electron-squirrel-startup")) {
  app.quit();
}
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 600,
    autoHideMenuBar: true,
    center: true,
    maximizable: false,
    resizable: false,
    icon: "../public/Tunnelblazer.ico",
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  {
    mainWindow.loadURL("http://localhost:5173");
  }
};
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
