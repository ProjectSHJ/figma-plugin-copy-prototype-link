!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}({9:function(e,t){const n=figma.currentPage.selection,i=figma.root;function o(e){const t=function(){let e;if(!n.length||n.length>1)e=figma.currentPage;else{const t=function(e){const t=new Map;if(!e)return t;let n=e;for(;n;)t.set(n.id,n),n=n.id===i.id?void 0:n.parent;return t}(n[0]),o=Array.from(t.keys());for(let n=o.length-1;n>=0;n--){const i=o[n],r=t.get(i),a=o[n-1],u=t.get(a);if("PAGE"===r.type){e=u&&"FRAME"===u.type?u:r;break}}}return e}();if(!t)return figma.closePlugin("ERROR: Could not get the link item");const o=i.getPluginData("shareFileId");switch(o||"copy"!==e||(e="setup"),e){case"setup":figma.showUI(__html__,{width:350,height:310}),figma.ui.postMessage({act:"setup",nodeId:t.id,fileId:o,fileName:i.name},{origin:"*"});break;case"copy":figma.showUI(__html__,{width:0,height:0}),figma.ui.postMessage({act:"copy",nodeId:t.id,fileId:o,fileName:i.name},{origin:"*"})}figma.ui.onmessage=e=>{"cancel"!==e.type?"save-file-id"!==e.type?"link-copied"!==e.type?figma.closePlugin():figma.closePlugin("Prototype link copied to clipboard"):i.setPluginData("shareFileId",e.fileId):figma.closePlugin()}}!function(){switch(figma.command){case"copyPrototypeLink":return o("copy");case"settings":return o("setup")}figma.closePlugin("ERROR: Unknown command")}()}});