import "./styles/main.scss";

const body = document.body;
const page = document.createElement("div");
const header = document.createElement("div");
const main = document.createElement("div");
const footer = document.createElement("div");

body.append(page);
page.append(header);
page.append(main);
page.append(footer);