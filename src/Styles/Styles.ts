import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#6a1b9a', // Morado
    borderRadius: 25, // Bordes más redondeados para un aspecto más suave
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#4a148c', // Sombra morada para dar profundidad
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Sombra en Android
    borderColor: '#4a148c', // Color del borde
    borderWidth: 1, // Borde más delgado
  },
  
  // Nuevo estilo para el botón "Registrar"
registerButtonBlue: {
  width: '100%',
  height: 50,
  backgroundColor: '#007BFF', // Azul brillante
  borderRadius: 8,           // Bordes redondeados más suaves
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  shadowColor: '#0056b3',     // Sombra azul oscura para dar profundidad
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 5,               // Sombra en Android
  borderColor: '#0056b3',     // Color de borde azul oscuro
  borderWidth: 1,             // Borde fino
},
// Estilo para el texto del botón "Registrar"
buttonRegisterBlueText: {
  fontSize: 18,               // Tamaño de texto grande
  color: '#fff',              // Texto en blanco
  fontWeight: 'bold',         // Texto en negrita
  textTransform: 'uppercase', // Texto en mayúsculas
  textAlign: 'center',        // Alineación centrada
},

  
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  titleItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  estadoContainer: {
    marginTop: 10,
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  
  estadoText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ff8c00',
  },
  selected: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  estadoButton: {
    flexDirection: 'row', // Esto permite que el texto y el checkbox estén alineados horizontalmente
    alignItems: 'center', // Alineamos los elementos verticalmente
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#007BFF', // Borde azul
    borderRadius: 25,
    backgroundColor: '#fff',
    shadowColor: '#007BFF', // Sombra sutil azul
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center', // Centra el contenido dentro del botón
  },

  estadoButtonText: {
    marginLeft: 10, // Espacio entre la palomita y el texto
    fontSize: 16,
    color: '#007BFF', // Color azul para el texto
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  editButton: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#007bff',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '48%',
    alignItems: 'center',
  },
  deleteButton: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#ff5c5c',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#ff5c5c',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '48%',
    alignItems: 'center',
  },
  saveButton: {
    padding: 12,
    backgroundColor: '#28a745', // Verde brillante
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    elevation: 5,
    shadowColor: '#28a745',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
  },
  cancelButton: {
    padding: 12,
    backgroundColor: '#dc3545',
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    elevation: 5,
    shadowColor: '#dc3545',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  key: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6a1b9a', // Morado
    borderRadius: 12, // Bordes más redondeados
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#4a148c', // Sombra morada para dar profundidad
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Sombra en Android
    borderColor: '#4a148c', // Color del borde
    borderWidth: 1, // Borde más delgado
  },
  buttonGreen: {
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonDisabled: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    opacity: 0.4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  errorText: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff', // Texto blanco para contraste
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Hace que el texto sea en mayúsculas
  },
  forgotPassword: {
    color: '#007BFF',
    fontSize: 16,
  },
  estadoRegister: {
    width: '100%',                // El contenedor ocupa todo el ancho
    alignItems: 'center',         // Alineación horizontal al centro
    justifyContent: 'center',     // Alineación vertical al centro
    marginBottom: 20,             // Espaciado debajo
  },
  buttonRegisterText: {
    color: '#fff',                // Texto blanco
    fontSize: 16,                 // Tamaño de texto
    fontWeight: 'bold',           // Texto en negrita
    textTransform: 'uppercase',   // Texto en mayúsculas
    textAlign: 'center',          // Texto centrado
  },
  // Estilos para el botón de estado simulado como un checkbox

// Estilo del texto del botón

// Checkbox vacío
checkboxEmpty: {
  width: 20,
  height: 20,
  borderWidth: 2,
  borderColor: '#007BFF',
  borderRadius: 4, // Bordes ligeramente redondeados
  backgroundColor: 'transparent',
  justifyContent: 'center',
  alignItems: 'center',
},

// Checkbox con palomita
checkboxChecked: {
  width: 20,
  height: 20,
  borderWidth: 2,
  borderColor: '#007BFF',
  borderRadius: 4,
  backgroundColor: '#007BFF', // Fondo azul cuando está marcado
  justifyContent: 'center',
  alignItems: 'center',
},

// Palomita (check)
checkMark: {
  color: '#fff', // Blanco para la palomita
  fontSize: 14, // Tamaño pequeño
  fontWeight: 'bold',
  marginTop: -2
}

});

export default styles;
