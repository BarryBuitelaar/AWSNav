document.body.onload = addInqdoNavigation;

const setStorage = (name, data) => globalThis.storage['set'](name, data);
const getStorage = (name) => globalThis.storage['get'](name);


chrome.extension.onMessage.addListener(function ({
  service,
  setting
}, sender, sendResponse) {
  if (service) {
    const items = getStorage('AWSNavItems');
    const serviceItems = globalThis.serviceItems;

    const filter = items.filter(
      obj => obj['title'] === serviceItems[service]['title']
    );

    let newItems = items ? [
      ...items,
      serviceItems[service]
    ] : [
      serviceItems[service]
    ]

    if (filter.length > 0) {
      const index = items.findIndex(
        item => item['title'] === filter[0]['title']
      );

      items.splice(index, 1);
      newItems = items;
    }

    setStorage('AWSNavItems', newItems);
    sendResponse(newItems);
  }

  if (setting !== undefined) {
    setStorage('AWSNavSetting', {
      isLoaded: true,
      openNewTab: setting
    });
    sendResponse({
      openNewTab: setting
    });
  }
  addInqdoNavigation();
  return true
});

function addInqdoNavigation() {
  let items = getStorage('AWSNavItems');
  const setting = getStorage('AWSNavSetting');

  checkForCurrentItems();

  if (!items) {
    setStorage('AWSNavItems', []);
    items = getStorage('AWSNavItems');
  }

  if (!setting) {
    setStorage('AWSNavSetting', {
      isLoaded: true,
      openNewTab: false
    });
  }

  const removeElements = (elms) => elms.forEach(el => el.remove());

  const navContainer = document.querySelectorAll('.inqdo-nav-container');

  if (navContainer) {
    removeElements(navContainer);
  }

  const inqdoNavContainer = document.createElement("div");
  inqdoNavContainer.className = 'inqdo-nav-container'
  inqdoNavContainer.appendChild(addListItems({
    items
  }));

  const currentDiv = document.getElementById("b");
  document.body.insertBefore(inqdoNavContainer, currentDiv);
}

const addListItems = ({
  items
}) => {
  const {
    openNewTab
  } = getStorage('AWSNavSetting');
  const ul = document.createElement("ul");

  const listItems = [
    ...items,
    {
      title: 'image'
    }
  ];

  listItems.forEach(item => {
    const {
      title,
      link
    } = item;
    const li = document.createElement("li");

    if (title !== 'image') {
      const a = document.createElement("a");

      a.href = link;
      if (openNewTab) {
        a.target = "_blank";
      }
      a.innerHTML += title;

      li.appendChild(a);
    } else {
      li.appendChild(addLogo());
    }

    ul.appendChild(li);
  });

  return ul
}

const addLogo = () => {
  const image = document.createElement('img');
  image.src = "https://portal.inqdo.cloud/static/media/logo-cloud.bc1a9d30.png";

  return image;
}


function checkForCurrentItems () {
  const setting = getStorage('AWSNavSetting')

  if (!setting) {
    chrome.extension.sendMessage({}, function({ isLoaded, currentItems }) {
      setStorage('AWSNavSetting', { isLoaded });
      if (currentItems) {
        setStorage('AWSNavItems', currentItems);
      }
    });
  }
}
