import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import styles from '../Styles/Styles';
import { RootStackParamList } from '../Navigators/Navigator';
import { BottomTabParamList } from '../Navigators/HomeNavigator';
import { Usuario } from '../data/types';

export type RegistrarScreenProps = NativeStackScreenProps<
  BottomTabParamList,
  'Registrar'
>;

const RegistrarScreen: React.FC<RegistrarScreenProps> = ({}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [cargando, setCargando] = useState(false);

  const [entradas, setEntradas] = useState<Usuario>({
    id: '',
    description: '',
    title: '',
    estado: 'pendiente', // Estado fijo
  });

  const handleRegistrar = async () => {
    const registrar = async () => {
      setCargando(true);
      try {
        const data = await firestore().collection('Alexis').add(entradas);
        setEntradas((prev) => ({ ...prev, id: data.id }));
        Alert.alert('Éxito', 'Su información fue guardada correctamente.');
      } catch (error) {
        const errorMessage =
          (error as { message?: string })?.message ||
          'Error al guardar los datos.';
        Alert.alert('Error', errorMessage);
      } finally {
        setCargando(false);
      }
    };

    Alert.alert('Registrar', '¿Desea registrar información?', [
      {
        text: 'Confirmar',
        onPress: async () => await registrar(),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  };

  if (cargando) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cargando...</Text>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        placeholderTextColor="#aaa"
        value={entradas.title}
        onChangeText={(texto) => setEntradas({ ...entradas, title: texto })}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripción"
        placeholderTextColor="#aaa"
        value={entradas.description}
        onChangeText={(texto) => setEntradas({ ...entradas, description: texto })}
      />

      {/* Estado fijo en "Pendiente" con botón morado */}
      <View style={styles.estadoRegister}>
  <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
    <Text style={[styles.buttonRegisterText, { color: '#fff' }]}>Pendiente</Text> {/* Usamos buttonText para el estilo del texto */}
  </TouchableOpacity>
</View>


<TouchableOpacity
    style={entradas.description && entradas.title ? styles.registerButtonBlue : styles.buttonDisabled}
    onPress={handleRegistrar}
    disabled={!(entradas.description && entradas.title)}  // El botón solo es habilitado si ambos campos están completos
  >
    <Text style={styles.buttonRegisterBlueText}>Registrar</Text>
  </TouchableOpacity>



    </View>
  );
};

export default RegistrarScreen;
