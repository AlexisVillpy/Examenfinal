import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import { Usuario } from '../data/types'; // Asegúrate de que la interfaz Usuario esté importada correctamente
import { RootStackParamList } from '../Navigators/Navigator';
import { BottomTabParamList } from '../Navigators/HomeNavigator';
import styles from '../Styles/Styles';

export type VisualizarScreenProps = NativeStackScreenProps<BottomTabParamList, 'Visualizar'>;

const VisualizarScreen: React.FC<VisualizarScreenProps> = ({}) => {
  const [cargando, setCargando] = useState(false);
  const [registro, setRegistro] = useState<Usuario[]>([]); // Establece el estado como Usuario[]
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Cargar datos desde Firestore
  const cargarItems = async () => {
    setCargando(true);
    try {
      const data = await firestore().collection('Alexis').get();
      const reformar = data.docs.map((registro) => ({
        id: registro.id || '', // Asegúrate de que siempre haya un `id` (si es undefined, usar cadena vacía)
        description: registro.data().description,
        title: registro.data().title,
        estado: registro.data().estado || 'pendiente', // Asegúrate de que 'estado' tenga un valor literal válido
      }));
      setRegistro(reformar); // Guardar los datos en el estado
    } catch (error) {
      console.error('Error al cargar datos:', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarItems();

    // Recargar la lista cuando regresas de DetalleScreen
    const unsubscribe = navigation.addListener('focus', () => {
      cargarItems();
    });

    // Limpiar el listener cuando se desmonte el componente
    return unsubscribe;
  }, [navigation]); // Recalcular cuando cambie la navegación

  const renderItem = ({ item }: { item: Usuario }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detalle', { item })}
    >
      <Text style={styles.titleItem}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {/* Mostrar el estado dinámico */}
      <View style={styles.estadoContainer}>
        <Text style={styles.estadoText}>{item.estado}</Text>
      </View>
    </TouchableOpacity>
  );

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
      <FlatList
        data={registro}
        keyExtractor={(item) => item.id || 'default-id'} // Asegúrate de que siempre se pase un `id` de tipo string
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={cargando}
            onRefresh={cargarItems}
            colors={['#ff0000']}
            tintColor="#00ff00"
            title="Cargando..."
          />
        }
      />
    </View>
  );
};

export default VisualizarScreen;
