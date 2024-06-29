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
    icon: "https://media.discordapp.net/attachments/981123797392424971/1256518578660835369/Tunnelblazer.png?ex=66810f9e&is=667fbe1e&hm=282f86f89de7bc43bda92bbb40d8bcbffe872f8bbb4e451aae142d9501b01e5e&=&format=webp&quality=lossless&width=525&height=525",
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
