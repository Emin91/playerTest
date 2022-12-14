import { Dimensions, StyleSheet } from 'react-native';
import { config } from '../../config/config';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  maskedContainer: {
    flex: 1,
    flexDirection: 'row',
    height,
  },
  container: {
    backgroundColor: 'transparent',
    height
  },
  maskedCameraBack: {
    width,
    height,
    backgroundColor: config.black,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  maskedMarkerContainer: {
    width: width * 0.6,
    height: height * 0.5,
    backgroundColor: config.black,
    borderRadius: 10,
  },
  customMarker: {
    width: width * 0.6,
    height: height * 0.4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.2,
  },
  customMarkerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.6,
    height: height * 0.2,
  },
  leftTopMarker: {
    width: height * 0.12,
    height: height * 0.12,
    borderWidth: 2,
    borderColor: config.white,
    borderTopStartRadius: 10,
    backgroundColor: 'transparent',
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  rightTopMarker: {
    width: height * 0.12,
    height: height * 0.12,
    borderWidth: 2,
    borderColor: config.white,
    borderTopEndRadius: 10,
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  customMarkerBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.6,
    height: height * 0.2,
    alignItems: 'flex-end',
  },
  leftBottomMarker: {
    width: height * 0.12,
    height: height * 0.12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderBottomStartRadius: 10,
    backgroundColor: 'transparent',
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  rightBottomMarker: {
    width: height * 0.12,
    height: height * 0.12,
    borderWidth: 2,
    borderColor: config.white,
    borderBottomEndRadius: 10,
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  headerContainer: {
    width,
    backgroundColor: 'transparent',
    height: height * 0.056,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    marginStart: 25,
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerText: {
    
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'center',
    color: config.white,
  },
  flashButton: {
    width: 50,
    height: 50,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: height * 0.12,
    height: height * 0.12,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    left: width / 2.5,
    bottom: 30,
    backgroundColor: config.transparentMainColor,
    borderWidth: 1,
    borderColor: config.shadowMainColor,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: config.mainColor,
    borderRadius: 50,
  },
  leftMask: {
    width: width / 4.5,
    height,
    backgroundColor: config.shadowOpacity,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  rightMask: {
    width: width / 4.5,
    height,
    backgroundColor: config.shadowOpacity,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  topMask: {
    width: width / 1.8,
    height: height * 0.26,
    backgroundColor: config.shadowOpacity,
    position: 'absolute',
    top: 0,
    left: width / 4.5,
  },
  bottomMask: {
    width: width / 1.8,
    height: height * 0.36,
    backgroundColor: config.shadowOpacity,
    position: 'absolute',
    bottom: 0,
    left: width / 4.5,
  },
});
