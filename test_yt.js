const fs = require('fs');

const html = fs.readFileSync('/tmp/yt_search.html', 'utf8');
let match = html.match(/ytInitialData\s*=\s*'(.+?)';/);
let jsonData = null;
if (match) {
  const decoded = match[1].replace(/\\x([0-9A-Fa-f]{2})/g, (m, p1) => String.fromCharCode(parseInt(p1, 16)));
  jsonData = JSON.parse(decoded);
} else {
  match = html.match(/ytInitialData\s*=\s*({.+?});/);
  if (match) {
    jsonData = JSON.parse(match[1]);
  }
}

let contents = [];
try {
  contents = jsonData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
} catch(e) {
  try {
    contents = jsonData.contents.sectionListRenderer.contents[0].itemSectionRenderer.contents;
  } catch(e2) {
    console.error("Could not find contents path", e2);
  }
}

const results = [];
for (const item of contents) {
  const renderer = item.videoRenderer || item.compactVideoRenderer;
  if (renderer && renderer.videoId) {
    results.push({
      videoId: renderer.videoId,
      title: renderer.title.runs[0].text,
      lengthText: renderer.lengthText ? renderer.lengthText.runs ? renderer.lengthText.runs[0].text : renderer.lengthText.simpleText : '0:00'
    });
  }
}
console.log("Found", results.length, "videos");
console.log(results.slice(0, 3));
