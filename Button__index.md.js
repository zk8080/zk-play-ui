(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"+pnj":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,a=e["export"],i=Object(r["useApiData"])(t),o=Object(n["useContext"])(r["context"]),m=o.locale,d=/^zh|cn$/i.test(m)?c["zh-CN"]:c["en-US"];return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement("table",{style:{marginTop:24}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,d.name),l.a.createElement("th",null,d.description),l.a.createElement("th",null,d.type),l.a.createElement("th",null,d["default"]))),l.a.createElement("tbody",null,i[a].map((function(e){return l.a.createElement("tr",{key:e.identifier},l.a.createElement("td",null,e.identifier),l.a.createElement("td",null,e.description||"--"),l.a.createElement("td",null,l.a.createElement("code",null,e.type)),l.a.createElement("td",null,l.a.createElement("code",null,e["default"]||e.required&&d.required||"--")))})))))}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},jtrg:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("+pnj"),i=a("Zxc8");t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos,n=l.a.memo(a["button-type"].component),o=l.a.memo(a["button-disabled"].component),m=l.a.memo(a["button-size"].component);return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"button"},l.a.createElement(r["AnchorLink"],{to:"#button","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Button"),l.a.createElement("h3",{id:"\u6309\u94ae\u7c7b\u578b"},l.a.createElement(r["AnchorLink"],{to:"#\u6309\u94ae\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u7c7b\u578b\uff1a"),l.a.createElement("p",null,"\u6839\u636e\u4f20\u5165\u4e0d\u540c\u7684",l.a.createElement("code",null,"btnType"),"\uff0c\u663e\u793a\u4e0d\u540c\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a",l.a.createElement("code",null,"default"),"\u3002",l.a.createElement("br",null),l.a.createElement("code",null,"primary")," | ",l.a.createElement("code",null,"default")," | ",l.a.createElement("code",null,"danger")," | ",l.a.createElement("code",null,"link"))),l.a.createElement(i["default"],a["button-type"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u7981\u7528\u72b6\u6001"},l.a.createElement(r["AnchorLink"],{to:"#\u7981\u7528\u72b6\u6001","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7981\u7528\u72b6\u6001"),l.a.createElement("p",null,"\u6dfb\u52a0",l.a.createElement("code",null,"disabled"),"\u5c5e\u6027\u4f1a\u8ba9\u6309\u94ae\u5904\u4e8e\u7981\u7528\u72b6\u6001\u3002")),l.a.createElement(i["default"],a["button-disabled"].previewerProps,l.a.createElement(o,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u6309\u94ae\u5c3a\u5bf8"},l.a.createElement(r["AnchorLink"],{to:"#\u6309\u94ae\u5c3a\u5bf8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u5c3a\u5bf8"),l.a.createElement("p",null,"\u5c3a\u5bf8",l.a.createElement("code",null,"size"),"\u5206\u4e3a\u5927\u3001\u4e2d\u3001\u5c0f\uff0c\u4e0d\u4f20\u8be5\u5c5e\u6027\u9ed8\u8ba4\u5c3a\u5bf8\u662f\u4e2d\u3002",l.a.createElement("code",null,"lg")," | ",l.a.createElement("code",null,"sm"))),l.a.createElement(i["default"],a["button-size"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(c["a"],{identifier:"Button",export:"default"}))))}}}]);