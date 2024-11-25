export interface Task {
    id?: number;             // ID da tarefa (opcional ao criar uma nova)
    dentistName: string;     // Nome do dentista
    description: string;     // Descrição da tarefa
    entryDate: string;       // Data de entrada
    color: string;           // Cor
    tooth: string;           // Dente
    patientName: string;     // Nome do paciente
    value: number;           // Valor do procedimento
    deliveryDate: string;    // Data de entrega
  }
  