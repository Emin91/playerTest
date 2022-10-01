import {StyleSheet} from 'react-native';
import {config} from '../../config/config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#00777E',
    borderRadius: 8,
    flexDirection: 'row',
    marginTop: 4,
  },
  priceContainer: {
    flex: 0.15,
  },
  priceWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  separator: {
    width: 2,
    borderRadius: 4,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    height: '100%',
    backgroundColor: config.white,
  },
  title: {
    fontSize: 14,
    color: config.white,
  },
  titleWithButton: {
    fontSize: 24,
    color: config.white,
    textAlign: 'center'
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    left: 0,
    paddingHorizontal: 12,
    height: '100%',
    backgroundColor: '#12ADB7',
    justifyContent: 'center',
  },
});

export default styles;
