!function(){"use strict";function e(e){return function(t){const r=t.toLowerCase().match(e);return!!r&&parseInt(r[1],10)}}var t={chrome:e(/chrom(?:e|ium)\/([0-9]+)\./),firefox:e(/firefox\/([0-9]+\.*[0-9]*)/),safari:e(/version\/([0-9]+.[0-9]+).* safari/),ie:e(/(?:msie |rv:)([0-9]+).[0-9]+/),edge:e(/edge\/([0-9]+).[0-9]+.[0-9]+/)};const r={firefox:[50,89],chrome:[50,91],ie:[6,11],edge:[12,91],safari:[9,17]};const{browser:o,version:i}=function(){const e=navigator.userAgent,r="undefined"!=typeof InstallTrigger,o=!!(navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1==navigator.userAgent.indexOf("CriOS")&&-1==navigator.userAgent.indexOf("FxiOS")),i=!!document.documentMode,n=!i&&!!window.StyleMedia,s=/HeadlessChrome/.test(e)||!!window.chrome,a=/; wv/.test(e)&&/Chrome/.test(e),c=/SAMSUNG/.test(e)&&/Chrome/.test(e),f=s||a||c?"chrome":r?"firefox":o?"safari":i?"ie":!!n&&"edge";return{browser:f,version:!(!f||!t[f])&&t[f](e)}}(),{polyfillUri:n}=window.__DW_SVELTE_PROPS__;o&&r[o]&&i>=r[o][0]?i<=r[o][1]&&document.write('<script type="text/javascript" src="'.concat(n,"/").concat(o,"-").concat(i,'.js"><\/script>')):document.write('<script type="text/javascript" src="'.concat(n,'/all.js"><\/script>'))}();