import { StyleSheet } from "react-native";
// from my own constant folder
import { isIphoneX } from "./utils";
export const hairlineWidth = StyleSheet.hairlineWidth;
export default {
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: "#000",
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
  },
  body: {
    flex: 1,
    alignSelf: "flex-end",
    marginBottom: isIphoneX() ? 20 : undefined,
    // backgroundColor: '#e5e5e5'
  },
  titleBox: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titleText: {
    color: "#757575",
    fontSize: 14,
  },
  messageBox: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  messageText: {
    color: "#9a9a9a",
    fontSize: 12,
  },
  buttonBox: {
    height: 56,
    marginTop: hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(223,223,223,1)",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "400",
  },
  cancelButtonBox: {
    height: 56,
    marginTop: 0,
    marginBottom: 10,
    borderRadius: 14,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(223,223,223,1)",
  },
};
