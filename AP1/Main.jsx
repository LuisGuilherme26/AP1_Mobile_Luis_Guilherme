import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Questao01 from "./Questao01"
import Questao02 from "./Questao02"

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <NavigationContainer screenOptions={{headerShown:false}}>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen name="Questao01" component={Questao01} />
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: "modal" }}>
                    <Stack.Screen name="Questao02" component={Questao02} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main