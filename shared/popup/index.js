import { copyToClipboard } from "../lib/clipboard.js";
import { youtubeDLCommandForVideo,youtubeDLCommandForMp3 } from "../lib/youtube-dl-cli-generator.js";

document.getElementById("btn-to-video-clipboard")
.addEventListener(
  "click",
  () => {
    chrome.tabs.query({ active: true, currentWindow: true})
    .then((tabs) => {
        const currentTab = tabs[0]
        copyToClipboard(
            youtubeDLCommandForVideo( 
                currentTab.url));
    })
      
    
  },
);

document.getElementById("btn-to-mp3-clipboard")
.addEventListener(
    "click",
    () => {
        chrome.tabs.query({ active: true, currentWindow: true})
    .then((tabs) => {
        const currentTab = tabs[0]
        copyToClipboard(
            youtubeDLCommandForMp3( 
                currentTab.url));
    })
    
    },
  );
