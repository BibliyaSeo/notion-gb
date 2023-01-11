import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigators/RootNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;