import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, ActivityIndicator } from "react-native";
import styles from "../Styles/Styles";
import { RootStackParamList } from "../Navigators/Navigator";
import Icon from "react-native-vector-icons/Ionicons";
import firestore from "@react-native-firebase/firestore";
import { Usuario } from "../data/types"; // Asegúrate de importar la interfaz Usuario correctamente

export type DetalleScreenProps = NativeStackScreenProps<RootStackParamList, "Detalle">;

const DetalleScreen: React.FC<DetalleScreenProps> = ({ navigation, route }) => {
  const [cargando, setCargando] = useState(false);
  const { item } = route.params;
  console.log("Item", item);

  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState<Usuario>(item);

  const excludedKeys = ["id"];
  const filteredData = Object.entries(data).filter(([key]) => !excludedKeys.includes(key));

  const handleInputChange = (key: string, value: string) => {
    setData((prevData: Usuario) => ({
      ...prevData,
      [key]: value,
    }));
  };

  // Cambiar el estado con un solo botón
  const toggleEstado = () => {
    const newEstado = data.estado === "pendiente" ? "completado" : "pendiente";
    setData((prevData: Usuario) => ({
      ...prevData,
      estado: newEstado,
    }));
  };

  const handleEliminar = async () => {
    const eliminar = async () => {
      setCargando(true);
      try {
        await firestore().collection("Alexis").doc(item.id).delete();
        Alert.alert("Eliminado", "El registro ha sido eliminado.");
        setIsEditing(false);
        navigation.goBack();
      } catch (err) {
        Alert.alert("Error", "Hubo un error al eliminar el registro. Intenta nuevamente.");
      } finally {
        setCargando(false);
      }
    };

    Alert.alert("¿Eliminar?", "La información será eliminada. ¿Confirmar?", [
      {
        text: "Confirmar",
        onPress: async () => await eliminar(),
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  };

  const handleModificar = async () => {
    const modificar = async () => {
      setCargando(true);
      try {
        await firestore().collection("Alexis").doc(item.id).update(data);
        Alert.alert("Guardado", "Los cambios han sido guardados.");
        setIsEditing(false);
      } catch (err) {
        Alert.alert("Error", "Hubo un error al guardar los cambios. Intenta nuevamente.");
      } finally {
        setCargando(false);
      }
    };

    Alert.alert("¿Modificar?", "La información será modificada. ¿Confirmar?", [
      {
        text: "Confirmar",
        onPress: async () => await modificar(),
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  };

  const cancelChanges = () => {
    setData(item);
    setIsEditing(false);
  };

  const renderItem = ({ item }: { item: [string, any] }) => {
    const [key, value] = item;
  
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.key}>{key.toUpperCase()}</Text>
        {isEditing ? (
          key === "estado" ? (
            <View style={styles.estadoContainer}>
              <TouchableOpacity
                style={styles.estadoButton}
                onPress={toggleEstado}
              >
                {/* Checkbox vacío o con palomita */}
                <View style={data.estado === "pendiente" ? styles.checkboxEmpty : styles.checkboxChecked}>
                  {data.estado === "completado" && (
                    <Text style={styles.checkMark}>✓</Text>  // Palomita solo cuando está completado
                  )}
                </View>
                {/* Texto que indica el estado */}
                <Text style={styles.estadoButtonText}>
                  {data.estado === "pendiente" ? "Pendiente" : "Completado"}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={(text) => handleInputChange(key, text)}
              placeholder="Editar valor..."
            />
          )
        ) : (
          <Text style={styles.value}>{value}</Text>
        )}
      </View>
    );
  };
  

  if (cargando)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cargando...</Text>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles</Text>
      <FlatList
        data={filteredData as any}
        keyExtractor={([key]) => key}
        renderItem={renderItem}
      />
      <View style={styles.buttonContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity style={styles.saveButton} onPress={handleModificar}>
              <Text style={styles.buttonText}>
                <Icon name="paper-plane" size={20} /> Guardar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={cancelChanges}>
              <Text style={styles.buttonText}>
                <Icon name="close" size={20} /> Cancelar
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
              <Text style={styles.buttonText}>
                <Icon name="pencil" size={20} /> Editar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={handleEliminar}>
              <Text style={styles.buttonText}>
                <Icon name="trash" size={20} /> Eliminar
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default DetalleScreen;
