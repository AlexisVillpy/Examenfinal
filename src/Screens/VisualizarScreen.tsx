import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importa Ionicons
import firestore from '@react-native-firebase/firestore';
import { Usuario } from '../data/types';
import { RootStackParamList } from '../Navigators/Navigator';
import { BottomTabParamList } from '../Navigators/HomeNavigator';
import styles from '../Styles/Styles';

export type VisualizarScreenProps = NativeStackScreenProps<BottomTabParamList, 'Visualizar'>;

const VisualizarScreen: React.FC<VisualizarScreenProps> = ({}) => {
  const [cargando, setCargando] = useState(false);
  const [registro, setRegistro] = useState<Usuario[]>([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const cargarItems = async () => {
    setCargando(true);
    try {
      const data = await firestore().collection('Alexis').get();
      const reformar = data.docs.map((registro) => ({
        id: registro.id || '',
        description: registro.data().description,
        title: registro.data().title,
        estado: registro.data().estado || 'pendiente',
      }));
      setRegistro(reformar);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarItems();

    const unsubscribe = navigation.addListener('focus', () => {
      cargarItems();
    });

    return unsubscribe;
  }, [navigation]);

  const registrosFiltrados = registro.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }: { item: Usuario }) => {
    // Define los colores según el estado
    const estadoColor = item.estado === 'pendiente' ? '#FF6347' : '#008000';
  
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Detalle', { item })}
      >
        <Text style={styles.titleItem}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.estadoContainer}>
          {/* Aplica el color dinámico */}
          <Text style={[styles.estadoText, { color: estadoColor }]}>{item.estado}</Text>
        </View>
      </TouchableOpacity>
    );
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
      {/* Contenedor para el buscador con la lupita */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por título..."
          placeholderTextColor="#000" 
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={registrosFiltrados}
        keyExtractor={(item) => item.id || 'default-id'}
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
