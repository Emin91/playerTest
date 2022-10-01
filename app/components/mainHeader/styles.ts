import {StyleSheet} from 'react-native';
import {config, Fonts} from '../../config/config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    color: config.white,
    
  },
  titleWithButton: {
    fontSize: 24,
    color: config.white,
    textAlign: 'center',
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
