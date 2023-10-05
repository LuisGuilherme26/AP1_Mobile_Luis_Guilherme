import { View, Text } from "react-native"
import { PaperProvider, IconButton } from "react-native-paper"
import style from "./Style"

const Questao02 = ({ route }) => {

    const item = route.params

    console.log(item)
    return (
        <PaperProvider>
            <View style={style.column}>
                <IconButton
                    icon={item.icon}
                    iconColor={"white"}
                    size={50}
                    mode="contained"
                />
                <Text style={style.text}>{item.name}</Text>
                <Text style={style.text}>{item.budget}</Text>
                <Text style={style.text}>{item.time}</Text>
            </View>
        </PaperProvider>
    )
}

export default Questao02