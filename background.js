const passingService = ({ service }) => {
  passToContent({ service });
  return true;
};

const passingSetting = ({ setting }) => {
  passToContent({ setting });
  return true;
};

chrome.runtime.onMessage.addListener(passingService);
chrome.runtime.onMessage.addListener(passingSetting);

const passToContent = ({ service, setting }) => {
  chrome.tabs.query({ active: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { service, setting }, response => {
      if (service) {
        chrome.runtime.sendMessage({
          msg: "service_send",
          data: response
        });
      }
    });
  });
};
