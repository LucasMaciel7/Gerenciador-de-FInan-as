import React, { useState, useEffect } from "react";
import axios from "axios";
import { Task } from "./interfaces/Task";

const App: React.FC = () => {
  // Estado para lista de tarefas
  const [tasks, setTasks] = useState<Task[]>([]);

  // Estado para os dados do formulário
  const [formData, setFormData] = useState<Task>({
    dentistName: "",
    description: "",
    entryDate: "",
    color: "",
    tooth: "",
    patientName: "",
    value: 0,
    deliveryDate: "",
  });

  // Busca tarefas ao carregar o componente
  useEffect(() => {
    fetchTasks();
  }, []);

  // Função para buscar tarefas da API
  const fetchTasks = async () => {
    try {
      const response = await axios.get<Task[]>("http://localhost:3000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  // Função para lidar com mudanças no formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para adicionar uma nova tarefa
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<Task>("http://localhost:3000/api/tasks/add", formData); // Tipagem explícita
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setFormData({
        dentistName: "",
        description: "",
        entryDate: "",
        color: "",
        tooth: "",
        patientName: "",
        value: 0,
        deliveryDate: "",
      });
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Gerenciamento de Finanças
      </h1>

      {/* Formulário */}
      <div className="bg-white shadow-md rounded p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Nome do Dentista", name: "dentistName" },
              { label: "Descrição", name: "description" },
              { label: "Data de Entrada", name: "entryDate", type: "date" },
              { label: "Cor", name: "color" },
              { label: "Dente", name: "tooth" },
              { label: "Nome do Paciente", name: "patientName" },
              { label: "Valor", name: "value", type: "number" },
              { label: "Data de Entrega", name: "deliveryDate", type: "date" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-gray-700 font-medium mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type || "text"}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  name={field.name}
                  value={formData[field.name as keyof Task] || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Adicionar Tarefa
          </button>
        </form>
      </div>

      {/* Tabela */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tarefas</h1>
        <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md">
            <thead className="bg-gray-200">
            <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Dentista</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Descrição</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Entrada</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Cor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Dente</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Paciente</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Valor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Entrega</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map((task) => (
                <tr key={task.id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{task.id}</td>
                <td className="border border-gray-300 px-4 py-2">{task.dentistName}</td>
                <td className="border border-gray-300 px-4 py-2">{task.description}</td>
                <td className="border border-gray-300 px-4 py-2">
                    {task.entryDate ? new Date(task.entryDate).toLocaleDateString() : "-"}
                </td>
                <td className="border border-gray-300 px-4 py-2">{task.color}</td>
                <td className="border border-gray-300 px-4 py-2">{task.tooth}</td>
                <td className="border border-gray-300 px-4 py-2">{task.patientName}</td>
                <td className="border border-gray-300 px-4 py-2">{task.value}</td>
                <td className="border border-gray-300 px-4 py-2">
                    {task.deliveryDate ? new Date(task.deliveryDate).toLocaleDateString() : "-"}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default App;
