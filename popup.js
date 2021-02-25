import {
  serviceItems
} from "./services.js";

const setLocalStorage = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getLocalStorage = (name) => {
  return JSON.parse(window.localStorage.getItem(name))
}

const clickedService = ({
  target: {
    name
  }
}) => {
  chrome.runtime.sendMessage({
    service: name
  });
}

const changeSetting = () => {
  var x = document.getElementById("checkbox");
  chrome.runtime.sendMessage({
    setting: x.checked
  });

  setLocalStorage('AWSNavSetting', {
    openNewTab: x.checked
  });
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.msg === "service_send") {
      console.log(request)
      setLocalStorage('AWSNavItems', request['data']);
      renderNavigation();
    }

    return true;
  }
);

const renderNavigation = () => {
  const items = getLocalStorage('AWSNavItems');

  if (!items) {
    setLocalStorage('AWSNavItems', []);
  }

  const removeElements = (elms) => elms.forEach(el => el.remove());

  const ulElement = document.querySelectorAll('.services-list');

  if (ulElement) {
    removeElements(ulElement);
  }

  const servicesList = document.getElementById("s");
  const ul = document.createElement("ul");
  ul.className = 'services-list';

  Object.keys(serviceItems).forEach(item => {
    const {
      title
    } = serviceItems[item];

    const li = document.createElement("li");
    const button = document.createElement("button");
    const filter = items.filter(
      obj => obj['title'] === title
    );

    if (filter.length > 0) {
      button.className = "selected";
    }

    button.name = item;
    button.innerText = capitalize(item);
    button.onclick = clickedService;

    li.appendChild(button);
    ul.appendChild(li);
  });

  servicesList.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", renderNavigation);
document.getElementById("checkbox").onchange = changeSetting;

if (getLocalStorage('AWSNavSetting')) {
  const {
    openNewTab
  } = getLocalStorage('AWSNavSetting');
  document.getElementById("checkbox").checked = openNewTab;
}