

var url;

chrome.tabs.onActiveChanged.addListener(function(id){
  chrome.tabs.get(id,function(tab){
    url = tab.url;
  });
});

chrome.tabs.onUpdated.addListener(function(tab){
  if(tab.active){
    url = tab.url;
  }
});



if(url !== "aaa") {


chrome.runtime.onInstalled.addListener(function() {
  const parent = chrome.contextMenus.create({
    id: "parent",
    title: "PlanChecker",
    contexts: ["all"],
  });

  chrome.contextMenus.create({
    id: "child1",
    parentId: "parent",
    title: "LP"
  });
  
  chrome.contextMenus.create({
    id: "child2",
    parentId: "parent",
    title: "CMS"
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab.id, {
      
  });
});

}




