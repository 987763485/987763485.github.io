/**
 * File: init.js
 * Project: hexo-theme-icarus
 * File Created: Monday, 19th October 2026 12:01:11 am
 * Author: wuchunle (987763485@qq.com)
 * -----
 * Last Modified: Monday, 19th October 2026 11:54:12 am
 * Modified By: wuchunle (987763485@qq.com)
 * -----
 * Copyright (c) 2026 wuchunle
 */

document.addEventListener("pjax:complete", function () {
  if (window.mermaid) {
    mermaid.run({ querySelector: '.mermaid' });
  }
});

document.addEventListener("DOMContentLoaded", async function () {
  if (!window.mermaid) {
    console.error("mermaid.min.js 未加载！");
    return;
  }

  mermaid.initialize({
    theme: 'base',
    startOnLoad: true,          // 关键：关闭自动渲染
    logLevel: 5,
    arrowMarkerAbsolute: false,
    htmlLabels: false,
    securityLevel: 'loose',
    themeVariables: {
      fontFamily: '"Open-Sans", "sans-serif"',
      lineColor: '#1e90ff',
      primaryTextColor: '#333333',
    },
    flowchart: {
      useMaxWidth: false,
      curve: 'linear',
      wrappingWidth: 400,
      padding: 20
    },
  });

  // 如果 startOnLoad 设置为 false，则需要手动调用 mermaid.run() 来渲染图表
  // try {
  //   await mermaid.run({
  //     querySelector: '.mermaid',   // v10+ 用 querySelector
  //   });
  //   console.log("mermaid run done");
  // } catch (e) {
  //   console.error("mermaid run failed:", e);
  // }
});