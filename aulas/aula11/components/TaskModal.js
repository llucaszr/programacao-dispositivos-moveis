import { useState, useContext } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";

function TaskModal({ setShowModal }) {
    const [tarefa, setTarefa] = useState("");
    const { criarTarefa } = useContext(TaskContext);

    return (
        <View style={{ margin: 16, padding: 16, backgroundColor: "white", borderRadius: 8 }}>
            <TextInput
                style={{ marginBottom: 8 }}
                mode="outlined"
                label="Nova tarefa"
                value={tarefa}
                onChangeText={setTarefa}
            />
            <Button
                style={{ marginBottom: 8 }}
                mode="contained"
                onPress={async () => {
                    await criarTarefa({ descricao: tarefa, concluida: false })
                    setShowModal(false)
                }}>Adicionar
            </Button>
            <Button
                mode="outlined"
                onPress={() => {
                    setShowModal(false)
                }}>Cancelar
            </Button>
        </View>
    )
}

export default TaskModal;