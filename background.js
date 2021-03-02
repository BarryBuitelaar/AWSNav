const setStorage = (name, data) => globalThis.storage['set'](name, data);
const getStorage = (name) => globalThis.storage['get'](name);

const passingService = ({
  service
}) => {
  passToContent({
    service
  });
  return true;
};

const passingSetting = ({
  setting
}) => {
  passToContent({
    setting
  });
  return true;
};

chrome.runtime.onMessage.addListener(passingService);
chrome.runtime.onMessage.addListener(passingSetting);

const passToContent = ({
  service,
  setting
}) => {
  chrome.tabs.query({
    active: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      service,
      setting
    }, response => {
      if (service) {
        setStorage('AWSNavItems', response);
        chrome.runtime.sendMessage({
          msg: "service_send",
          data: response
        });
      } else if (setting) {
        setStorage('AWSNavSetting', {
          isLoaded: true,
          openNewTab: response
        });
      }
    });
  });
};

chrome.runtime.onMessage.addListener(function ({}, sender, sendResponse) {
  const currentItems = getStorage('AWSNavItems');
  const navSettings = getStorage('AWSNavSetting');
  const storage = {
    isLoaded: true,
    setting: navSettings ? navSettings : {}
  }

  storage['currentItems'] = currentItems ? currentItems : [];

  sendResponse({
    ...storage
  });
  return true;
});