export interface Usuario {
    id?: string;
    title: string;
    description: string;
    estado: 'pendiente' | 'completado'; // Nuevo campo
    [key: string]: any;
  }
  