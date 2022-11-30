// index.js
// 获取应用实例

Page({
  data: {
  },
  onLoad() {
  },
  onAdLoad() {
    console.log('adload-par');
  },
  onAdShow() {
    console.log('adshow-par');
  },
  onAdClose() {
    console.log('adclose-par');
  },
  onAdClick() {
    console.log('adclick-par');
  },
  onAdError() {
    console.log('aderror-par');
  }
})
