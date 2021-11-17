(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{Rsk4:function(e,n,t){"use strict";t.r(n);var r=t("9og8"),i=t("WmNS"),a=t.n(i),o=t("LtsZ"),u="import React from 'react';\nimport { AutoComplete } from 'zk-play-ui';\n\ninterface LakerPlayerProps {\n  value: string;\n  number: number;\n}\n\nconst testData = [\n  { value: 'bradley', number: 11 },\n  { value: 'pope', number: 1 },\n  { value: 'caruso', number: 4 },\n  { value: 'cook', number: 2 },\n  { value: 'cousins', number: 15 },\n  { value: 'james', number: 23 },\n  { value: 'AD', number: 3 },\n  { value: 'green', number: 14 },\n  { value: 'howard', number: 39 },\n  { value: 'kuzma', number: 0 },\n];\n\nconst Index = () => {\n  const handleFetch = (val: string) => {\n    return testData.filter((item) => item.value.includes(val));\n  };\n  const handleSelect = (item: any) => {\n    console.log(item);\n  };\n  const renderOption = (item: any) => {\n    const lakerPlayerItem = item;\n    return (\n      <>\n        <h2>Name: {lakerPlayerItem.value}</h2>\n        <p>Number: {lakerPlayerItem.number}</p>\n      </>\n    );\n  };\n  return (\n    <AutoComplete\n      fetchSuggestions={handleFetch}\n      onSelect={handleSelect}\n      renderOption={renderOption}\n    />\n  );\n};\n\nexport default Index;",s="import React from 'react';\nimport { AutoComplete } from 'zk-play-ui';\n\ninterface GithubUserProps {\n  login: string;\n  url: string;\n  avatar_url: string;\n}\n\nconst Index = () => {\n  const handleFetch = (query: string) => {\n    return fetch(`https://api.github.com/search/users?q=${query}`)\n      .then((res) => res.json())\n      .then(({ items }) => {\n        console.log(items);\n        return items\n          .slice(0, 10)\n          .map((item: any) => ({ value: item.login, ...item }));\n      });\n  };\n\n  const renderOption = (item: any) => {\n    const itemWithGithub = item;\n    return (\n      <>\n        <h2>Name: {itemWithGithub.value}</h2>\n        <p>url: {itemWithGithub.url}</p>\n      </>\n    );\n  };\n  return (\n    <AutoComplete fetchSuggestions={handleFetch} renderOption={renderOption} />\n  );\n};\n\nexport default Index;",l='import React from \'react\';\nimport { Button } from \'zk-play-ui\';\nimport \'./index.less\';\n\nfunction BaseDemo() {\n  return (\n    <div className="button-demo--wrapper">\n      <Button>defaut</Button>\n      <Button btnType="primary">primary</Button>\n      <Button btnType="danger">danger</Button>\n      <Button btnType="link" href="https://www.baidu.com">\n        link\n      </Button>\n    </div>\n  );\n}\n\nexport default BaseDemo;',p=".button-demo--wrapper {\n  .zk-play-btn {\n    margin-right: 12px;\n  }\n}",c='import React from \'react\';\nimport { Button } from \'zk-play-ui\';\nimport \'./index.less\';\n\nfunction BaseDemo() {\n  return (\n    <div className="button-demo--wrapper">\n      <Button disabled={true}>disabled</Button>\n      <Button disabled={true} btnType="primary">\n        disabled\n      </Button>\n      <Button disabled={true} btnType="danger">\n        disabled\n      </Button>\n      <Button disabled={true} btnType="link">\n        disabled\n      </Button>\n    </div>\n  );\n}\n\nexport default BaseDemo;',d="import React from 'react';\nimport { Button } from 'zk-play-ui';\nimport './index.less';\n\nfunction BaseDemo() {\n  return (\n    <div className=\"button-demo--wrapper\">\n      <Button size=\"lg\">large</Button>\n      <Button>default</Button>\n      <Button size=\"sm\">small</Button>\n    </div>\n  );\n}\n\nexport default BaseDemo;",m="/*\n * @Author: your name\n * @Date: 2021-09-12 23:18:12\n * @LastEditTime: 2021-09-23 21:33:21\n * @LastEditors: Please set LastEditors\n * @Description: In User Settings Edit\n * @FilePath: /zk-play-ui/src/Icon/demo/theme.tsx\n */\nimport React from 'react';\nimport { Icon } from 'zk-play-ui';\nimport type { ThemeProps } from '..';\nimport './index.less';\n\nconst themeArr: ThemeProps[] = [\n  'primary',\n  'secondary',\n  'success',\n  'info',\n  'warning',\n  'danger',\n  'light',\n  'dark',\n];\n\nconst IconDemo = () => {\n  return (\n    <div className=\"icon-demo--wrapper\">\n      {themeArr.map((item, index) => {\n        return <Icon key={index} icon={'apple-alt'} theme={item} size=\"5x\" />;\n      })}\n    </div>\n  );\n};\n\nexport default IconDemo;",f=".icon-demo--wrapper {\n  .zk-icon {\n    margin-right: 20px;\n    margin-bottom: 20px;\n  }\n}",h="import React from 'react';\nimport { Upload, Button } from 'zk-play-ui';\n\nconst defaultFileList = [\n  {\n    uid: '123',\n    size: 1234,\n    name: 'hello.md',\n    status: 'uploading' as const,\n    percent: 30,\n  },\n  {\n    uid: '122',\n    size: 1234,\n    name: 'xyz.md',\n    status: 'success' as const,\n    percent: 30,\n  },\n  {\n    uid: '121',\n    size: 1234,\n    name: 'eyiha.md',\n    status: 'error' as const,\n    percent: 30,\n  },\n];\n\nexport default () => (\n  <Upload\n    action=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n    defaultFileList={defaultFileList}\n  >\n    <Button btnType=\"primary\">\u4e0a\u4f20\u6587\u4ef6</Button>\n  </Upload>\n);",b="import React from 'react';\nimport { Button, Upload } from 'zk-play-ui';\n\nexport default () => (\n  <Upload\n    action=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n    name=\"my_file\"\n    data={{ test: '123' }}\n    headers={{\n      'Customer-Header': 'ZK',\n    }}\n    withCredentials={true}\n    accept={'.png'}\n    multiple={true}\n  >\n    <Button btnType=\"primary\">\u4e0a\u4f20\u6587\u4ef6</Button>\n  </Upload>\n);";n["default"]={"autocomplete-base":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(0),t.e(3),t.e(18)]).then(t.bind(null,"mtbm"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:u}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"AutoComplete",identifier:"autocomplete-base"}},"autocomplete-fetchdata":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(0),t.e(3),t.e(18)]).then(t.bind(null,"4Np0"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:s}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"AutoComplete",identifier:"autocomplete-fetchdata"}},"button-type":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(20).then(t.bind(null,"Z/hL"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:l},"index.less":{import:"./index.less",content:p}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Button",identifier:"button-type"}},"button-disabled":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(20).then(t.bind(null,"K0qk"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:c},"index.less":{import:"./index.less",content:p}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Button",identifier:"button-disabled"}},"button-size":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(20).then(t.bind(null,"tiC2"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:d},"index.less":{import:"./index.less",content:p}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Button",identifier:"button-size"}},"icon-theme":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(0),t.e(19)]).then(t.bind(null,"/nbF"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:m},"index.less":{import:"./index.less",content:f}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Icon",identifier:"icon-theme"}},"Input-demo":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("K+nK"),e.next=3,t.e(8).then(t.bind(null,"mEJG"));case 3:return e.t0=n,e.next=6,Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"RYFT"));case 6:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=n,e.next=11,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 11:return e.t3=e.sent,i=(0,e.t2)(e.t3),e.next=15,Promise.all([t.e(0),t.e(3),t.e(5),t.e(7),t.e(6)]).then(t.bind(null,"/7QA"));case 15:return e.sent,o=function(){return i["default"].createElement(r["default"],{style:{width:"300px"},placeholder:"please input some value"})},e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:"import React from 'react';\nimport { Input } from 'zk-play-ui';\n\nexport default () => (\n  <Input style={{ width: '300px' }} placeholder=\"please input some value\" />\n);"}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Input",identifier:"Input-demo"}},"Input-demo-1":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("K+nK"),e.next=3,t.e(8).then(t.bind(null,"mEJG"));case 3:return e.t0=n,e.next=6,Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"RYFT"));case 6:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=n,e.next=11,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 11:return e.t3=e.sent,i=(0,e.t2)(e.t3),e.next=15,Promise.all([t.e(0),t.e(3),t.e(5),t.e(7),t.e(6)]).then(t.bind(null,"/7QA"));case 15:return e.sent,o=function(){return i["default"].createElement(r["default"],{style:{width:"300px"},placeholder:"disabled",disabled:!0})},e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:"import React from 'react';\nimport { Input } from 'zk-play-ui';\n\nexport default () => (\n  <Input style={{ width: '300px' }} placeholder=\"disabled\" disabled />\n);"}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Input",identifier:"Input-demo-1"}},"Input-demo-2":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("K+nK"),e.next=3,t.e(8).then(t.bind(null,"mEJG"));case 3:return e.t0=n,e.next=6,Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"RYFT"));case 6:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=n,e.next=11,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 11:return e.t3=e.sent,i=(0,e.t2)(e.t3),e.next=15,Promise.all([t.e(0),t.e(3),t.e(5),t.e(7),t.e(6)]).then(t.bind(null,"/7QA"));case 15:return e.sent,o=function(){return i["default"].createElement(r["default"],{style:{width:"300px"},placeholder:"input with icon",icon:"search"})},e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:"import React from 'react';\nimport { Input } from 'zk-play-ui';\n\nexport default () => (\n  <Input\n    style={{ width: '300px' }}\n    placeholder=\"input with icon\"\n    icon=\"search\"\n  />\n);"}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Input",identifier:"Input-demo-2"}},"Input-demo-3":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("K+nK"),e.next=3,t.e(8).then(t.bind(null,"mEJG"));case 3:return e.t0=n,e.next=6,Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"RYFT"));case 6:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=n,e.next=11,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 11:return e.t3=e.sent,i=(0,e.t2)(e.t3),e.next=15,Promise.all([t.e(0),t.e(3),t.e(5),t.e(7),t.e(6)]).then(t.bind(null,"/7QA"));case 15:return e.sent,o=function(){return i["default"].createElement(i["default"].Fragment,null,i["default"].createElement(r["default"],{style:{width:"300px"},defaultValue:"prepend text",prepend:"https://"}),i["default"].createElement(r["default"],{style:{width:"300px"},defaultValue:"google",append:".com"}))},e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:"import React from 'react';\nimport { Input } from 'zk-play-ui';\n\nexport default () => (\n  <>\n    <Input\n      style={{ width: '300px' }}\n      defaultValue=\"prepend text\"\n      prepend=\"https://\"\n    />\n    <Input style={{ width: '300px' }} defaultValue=\"google\" append=\".com\" />\n  </>\n);"}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Input",identifier:"Input-demo-3"}},"Input-demo-4":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("K+nK"),e.next=3,t.e(8).then(t.bind(null,"mEJG"));case 3:return e.t0=n,e.next=6,Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"RYFT"));case 6:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=n,e.next=11,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 11:return e.t3=e.sent,i=(0,e.t2)(e.t3),e.next=15,Promise.all([t.e(0),t.e(3),t.e(5),t.e(7),t.e(6)]).then(t.bind(null,"/7QA"));case 15:return e.sent,o=function(){return i["default"].createElement(i["default"].Fragment,null,i["default"].createElement(r["default"],{style:{width:"300px"},defaultValue:"large size",size:"lg"}),i["default"].createElement(r["default"],{style:{width:"300px"},defaultValue:"default size"}),i["default"].createElement(r["default"],{style:{width:"300px"},placeholder:"small size",size:"sm"}))},e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:"import React from 'react';\nimport { Input } from 'zk-play-ui';\n\nexport default () => (\n  <>\n    <Input style={{ width: '300px' }} defaultValue=\"large size\" size=\"lg\" />\n    <Input style={{ width: '300px' }} defaultValue=\"default size\" />\n    <Input style={{ width: '300px' }} placeholder=\"small size\" size=\"sm\" />\n  </>\n);"}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Input",identifier:"Input-demo-4"}},"Menu-demo":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("K+nK"),e.next=3,t.e(26).then(t.bind(null,"77I8"));case 3:return e.t0=n,e.next=6,Promise.all([t.e(0),t.e(3),t.e(28)]).then(t.bind(null,"oTDW"));case 6:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=n,e.next=11,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 11:return e.t3=e.sent,i=(0,e.t2)(e.t3),e.next=15,Promise.all([t.e(0),t.e(3),t.e(5),t.e(7),t.e(6)]).then(t.bind(null,"/7QA"));case 15:return e.sent,o=function(e){return i["default"].createElement(r["default"],{defaultIndex:"0",className:"test",defaultOpenSubMenus:["4"],mode:"vertical"},i["default"].createElement(r["default"].Item,null,"active"),i["default"].createElement(r["default"].Item,{disabled:!0},"disabled"),i["default"].createElement(r["default"].Item,{className:"test-xyz"},"xyz"),i["default"].createElement(r["default"].SubMenuItem,{title:"dropdown"},i["default"].createElement(r["default"].Item,null,"drop1")),i["default"].createElement(r["default"].SubMenuItem,{title:"opened"},i["default"].createElement(r["default"].Item,null,"opened1")))},e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:'import React from \'react\';\nimport { Menu } from \'zk-play-ui\';\n\nexport default (props) => (\n  <Menu\n    defaultIndex="0"\n    className="test"\n    defaultOpenSubMenus={[\'4\']}\n    mode="vertical"\n  >\n    <Menu.Item>active</Menu.Item>\n    <Menu.Item disabled>disabled</Menu.Item>\n    <Menu.Item className="test-xyz">xyz</Menu.Item>\n    <Menu.SubMenuItem title="dropdown">\n      <Menu.Item>drop1</Menu.Item>\n    </Menu.SubMenuItem>\n    <Menu.SubMenuItem title="opened">\n      <Menu.Item>opened1</Menu.Item>\n    </Menu.SubMenuItem>\n  </Menu>\n);'}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Menu",identifier:"Menu-demo"}},"Progress-demo":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){var n,r,i,o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t("K+nK"),e.next=3,t.e(27).then(t.bind(null,"NtNE"));case 3:return e.t0=n,e.next=6,t.e(29).then(t.bind(null,"nBBv"));case 6:return e.t1=e.sent,r=(0,e.t0)(e.t1),e.t2=n,e.next=11,Promise.resolve().then(t.t.bind(null,"q1tI",7));case 11:return e.t3=e.sent,i=(0,e.t2)(e.t3),e.next=15,Promise.all([t.e(0),t.e(3),t.e(5),t.e(7),t.e(6)]).then(t.bind(null,"/7QA"));case 15:return e.sent,o=function(){return i["default"].createElement(r["default"],{percent:80,strokeHeight:30,theme:"danger"})},e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:"import React from 'react';\nimport { Progress } from 'zk-play-ui';\n\nexport default () => <Progress percent={80} strokeHeight={30} theme=\"danger\" />;"}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Progress",identifier:"Progress-demo"}},"upload-base":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(0),t.e(5),t.e(17)]).then(t.bind(null,"2onI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:h}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Upload",identifier:"upload-base"}},"upload-customdata":{component:Object(o["dynamic"])({loader:function(){var e=Object(r["a"])(a.a.mark((function e(){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(0),t.e(5),t.e(17)]).then(t.bind(null,"aSyl"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:b}},dependencies:{"zk-play-ui":{version:"1.0.2"},react:{version:"^16.12.0"}},componentName:"Upload",identifier:"upload-customdata"}}}},x2v5:function(e){e.exports=JSON.parse('{"Button":{"default":[{"identifier":"size","description":"\u6309\u94ae\u5927\u5c0f","type":"ButtonSize","default":"sm"},{"identifier":"btnType","description":"\u6309\u94ae\u7c7b\u578b","type":"ButtonType","default":"default"}]},"Icon":{"default":[{"identifier":"theme","description":"\u4e3b\u9898\u8272","type":"ThemeProps"}]},"Progress":{"default":[{"identifier":"percent","description":"\u767e\u5206\u6bd4","type":"number","required":true},{"identifier":"strokeHeight","description":"\u8fdb\u5ea6\u6761\u9ad8\u5ea6","type":"number","default":"15"},{"identifier":"showText","description":"\u662f\u5426\u663e\u793a\u767e\u5206\u6bd4\u6587\u6848","type":"boolean","default":"true"},{"identifier":"styles","description":"\u8fdb\u5ea6\u6761\u6837\u5f0f","type":"CSSProperties"},{"identifier":"theme","description":"\u8fdb\u5ea6\u6761\u4e3b\u9898\u8272","type":"ThemeProps","default":"primary"}]},"Upload":{"default":[{"identifier":"action","description":"\u4e0a\u4f20\u5730\u5740","type":"string","required":true},{"identifier":"defaultFileList","description":"\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868","type":"UploadFile[]"},{"identifier":"beforeUpload","description":"\u4e0a\u4f20\u6587\u4ef6\u524d\u7684\u94a9\u5b50\u51fd\u6570\uff0c\u53c2\u6570\u4e3a\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u8fd4\u56defalse\u6216\u8005Promise\u65f6\u505c\u6b62\u4e0a\u4f20","type":"(file: File) => boolean | Promise<File>"},{"identifier":"onProgress","description":"\u4e0a\u4f20\u6587\u4ef6\u65f6\u7684\u94a9\u5b50\u51fd\u6570","type":"(percentage: number, file: UploadFile) => void"},{"identifier":"onSuccess","description":"\u4e0a\u4f20\u6587\u4ef6\u6210\u529f\u7684\u94a9\u5b50\u51fd\u6570","type":"(data: any, file: UploadFile) => void"},{"identifier":"onError","description":"\u4e0a\u4f20\u6587\u4ef6\u5931\u8d25\u7684\u94a9\u5b50\u51fd\u6570","type":"(err: any, file: UploadFile) => void"},{"identifier":"onChange","description":"\u6587\u4ef6\u72b6\u6001\u6539\u53d8\u65f6\u7684\u94a9\u5b50\u51fd\u6570","type":"(file: UploadFile) => void"},{"identifier":"onRemove","description":"\u6587\u4ef6\u5217\u8868\u79fb\u9664\u6587\u4ef6\u65f6\u7684\u94a9\u5b50\u51fd\u6570","type":"(file: UploadFile) => void"},{"identifier":"name","description":"\u4e0a\u4f20\u6587\u4ef6\u5b57\u6bb5\u540d\u5b57","type":"string"},{"identifier":"data","description":"\u4e0a\u4f20\u65f6\u989d\u4e3a\u9644\u5e26\u7684\u53c2\u6570","type":"{ [key: string]: any; }"},{"identifier":"headers","description":"\u4e0a\u4f20\u6587\u4ef6\u7684\u8bf7\u6c42\u5934","type":"{ [key: string]: any; }"},{"identifier":"withCredentials","description":"\u4e0a\u4f20\u6587\u4ef6\u662f\u5426\u652f\u6301\u53d1\u9001cookie","type":"boolean"},{"identifier":"accept","description":"\u63a5\u53d7\u4e0a\u4f20\u7684\u6587\u4ef6\u7c7b\u578b","type":"string"},{"identifier":"multiple","description":"\u662f\u5426\u652f\u6301\u591a\u9009","type":"boolean"},{"identifier":"drag","description":"\u662f\u5426\u652f\u6301\u62d6\u62fd\u4e0a\u4f20","type":"boolean"}]}}')}}]);