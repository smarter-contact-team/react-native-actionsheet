import { Dimensions, Platform } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const IS_IOS = Platform.OS === "ios";
const IS_PAD = Platform.OS === "ios" && Platform.isPad;
const IS_TVOS = Platform.OS === "ios" && Platform.isTVOS;

const iOSHeights = new Set([
  896, 812, 896, 844, 780, 926, 844, 780, 844, 926, 844, 926, 852, 932, 852,
  932, 852, 932, 568, 568, 568, 667, 667, 736, 667, 736, 667, 736, 568, 553,
  667, 667, 812, 896, 896, 393, 852, 956, 874,
]);

export function isset(prop) {
  return typeof prop !== "undefined";
}

export function merge(target, source) {
  Object.keys(source).forEach((key) => {
    if (Object.prototype.toString.call(source).slice(8, -1) === "Object") {
      target[key] = merge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}

export function isAndroidLargeSize(dim) {
  return dim.width > 370;
}
function isIPhone12MiniSize(dim) {
  return dim.height === 780 || dim.width === 780;
}
function isIPhoneXSize(dim) {
  return dim.height === 812 || dim.width === 812;
}
function isIPhoneXrSize(dim) {
  return dim.height === 896 || dim.width === 896;
}
function isIPhone12Size(dim) {
  return dim.height === 844 || dim.width === 844;
}
function isIPhonesMaxSize(dim) {
  return dim.height === 926 || dim.width === 926;
}
function isIPhones14ProSize(dim) {
  return dim.height === 852 || dim.width === 852;
}
function isIPhones14ProMaxSize(dim) {
  return dim.height === 932 || dim.width === 932;
}
function isIPhonesSESize(dim) {
  return dim.height === 750 || dim.width === 750;
}
function isIPhonesSE2Size(dim) {
  return dim.height === 667 || dim.width === 667;
}
function isIPhones16ProMaxSize(dim) {
  return dim.height === 956 || dim.width === 956;
}
function isIPhones16ProSize(dim) {
  return dim.height === 874 || dim.width === 874;
}
function isIOSViewportHeight(dim) {
  return iOSHeights?.has(dim.height);
}
function isIPhoneAir(dim) {
  return dim.height === 912 || dim.width === 912;
}

export function isIphoneX() {
  const dim = {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  };

  return (
    IS_IOS &&
    !IS_PAD &&
    !IS_TVOS &&
    (isIPhoneXSize(dim) ||
      isIPhoneXrSize(dim) ||
      isIPhone12Size(dim) ||
      isIPhonesMaxSize(dim) ||
      isIPhone12MiniSize(dim) ||
      isIPhonesSESize(dim) ||
      isIPhones14ProSize(dim) ||
      isIPhonesSE2Size(dim) ||
      isIOSViewportHeight(dim) ||
      isIPhones14ProMaxSize(dim) ||
      isIPhones16ProSize(dim) ||
      isIPhones16ProMaxSize(dim) ||
      isIPhoneAir(dim))
  );
}
