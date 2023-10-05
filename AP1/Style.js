import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    main: {
        backgroundColor: "black",
        color: "white"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
        margin: 10
    },
    header: {
        flex: 1,
        alignItems: "center",
        fontSize: 40,
        fontWeight: "bold",
        margin: 20
    },
    box:{
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    text: {
        fontSize: 35,
        marginBottom: 5,
        marginLeft: 15
    },
    column: {
        flex: 1
    }
})

export default style