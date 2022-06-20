import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from "./src/telas/TelaInicial";
import Resultados from "./src/telas/Resultados";
import Detalhes from "./src/telas/Detalhes";


const  Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
        name="TelaInicial"
        component={TelaInicial}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name="Resultados"
        component={Resultados}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App;



