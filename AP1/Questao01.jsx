import { View, Text, SectionList } from "react-native"
import { PaperProvider, IconButton } from "react-native-paper"
import style from "./Style"
import Data from "./Data"

const Questao01 = ({navigation}) => {

    return (
        <PaperProvider>
            <SectionList
                sections={Data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={style.container}>
                        <View style={style.box}>
                            <View>
                                <IconButton
                                    icon={item.icon}
                                    iconColor={"white"}
                                    size={50}
                                    onPress={() => navigation.navigate("Questao02",item)}
                                    mode="contained"
                                />
                            </View>
                            <View>
                                <Text style={style.text}>{item.name}</Text>
                                <Text style={style.text}>{item.time}</Text>
                            </View>
                        </View>
                        <Text style={style.text}>{item.budget}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={style.header}>{title}</Text>
                )}
            />
        </PaperProvider>
    )
}

export default Questao01