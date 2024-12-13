import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ActionButton({ color, icon, label, path }) {
    return (
        <TouchableOpacity
            style={styles.action}
            onPress={() => {
                if (path) {
                    router.navigate(path);
                } else {

                }
            }}
        >
            <View
                style={[
                    styles.actionButton,
                    { backgroundColor: color ? color : "#7b48f4" }
                ]}
            >
                <MaterialIcons
                    name={icon ? icon : "attach-money"}
                    size={34}
                    color="white"
                />
                <Text style={styles.text.actionText}>
                    {label ? label : "Label"}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    action: {
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    actionButton: {
        width: 68,
        height: 68,
        borderRadius: 68,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        actionText: {
            color: "#fff",
        },
    },
})