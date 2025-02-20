"use client";
"use strict";
import React from "react";
import NavBar from "../../_components/navBar";
import Calendario from "~/app/_components/calendario";
import ModalAdicionar from "~/app/_components/modal/modal";

const mockEntradas = [
  {
    id: 1,
    descricao: "Venda de escravos",
    data: "2025-01-10",
    valor: 1000.0,
  },

  {
    id: 2,
    descricao: "Venda de escravos",
    data: "2025-02-10",
    valor: 1000.0,
  },

  {
    id: 3,
    descricao: "Venda de escravos",
    data: "2025-02-17",
    valor: 100.99,
  },
];

const mockSaida = [
  {
    id: 1,
    descricao: "Compra de Matrizes",
    data: "2025-01-10",
    valor: 1000.0,
  },

  {
    id: 2,
    descricao: "Compra de suprimentos",
    data: "2025-02-10",
    valor: 1000.0,
  },

  {
    id: 3,
    descricao: "Compra de Machos",
    data: "2025-02-17",
    valor: 100.99,
  },
];

function entradaDoDia(
  selectedDate: Date,
  movimentos: { id: number; descricao: string; data: string; valor: number }[],
) {
  const formattedDate = selectedDate.toISOString().split("T")[0];
  const variavel = movimentos.filter(
    (movimento) => movimento.data === formattedDate?.toString(),
  );
  return variavel;
}

const DashboardPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  const [showModalGasto, setShowModalGasto] = React.useState(false);
  const [showModalRenda, setShowModalRenda] = React.useState(false);

  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <div className="justify-top flex h-full px-10 pt-12">
        <div className="flex w-1/3">
          <Calendario
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </div>
        <div className="flex w-2/3 justify-around gap-4">
          <div className="h-full w-1/2 rounded-md bg-[#6CA35E] p-8">
            <div className="mb-6 flex w-full items-center justify-center">
              <div className="flex w-full justify-center">
                <h1 className="text-3xl text-white">Entradas do Dia</h1>
              </div>
              <div className="flex w-8 items-center justify-center">
                <button
                  className="rounded-md bg-white px-2 text-black"
                  onClick={() => setShowModalRenda(true)}
                >
                  +
                </button>
              </div>
              <div>
                {showModalRenda && (
                  <ModalAdicionar
                    title="Adicionar Entrada"
                    isOpen={showModalRenda}
                    onClose={() => setShowModalRenda(false)}
                    onSubmit={() => {
                      /* handle submit logic here */
                    }}
                  />
                )}
              </div>
            </div>
            {entradaDoDia(selectedDate, mockEntradas).map((entrada) => (
              <div
                className="flex justify-center rounded-lg bg-slate-100 p-4"
                key={entrada.id}
              >
                <p>
                  {entrada.descricao} - R$ {entrada.valor}
                </p>
              </div>
            ))}
          </div>
          <div className="h-auto w-1/2 rounded-md bg-[#FF5C5C] p-8">
            <div className="mb-6 flex w-full items-center justify-center">
              <div className="flex w-full justify-center">
                <h1 className="text-3xl text-white">Gastos do Dia</h1>
              </div>
              <div className="flex w-8 items-center justify-center">
                <button
                  className="rounded-md bg-white px-2 text-black"
                  onClick={() => setShowModalGasto(true)}
                >
                  +
                </button>
              </div>
              <div className="flex justify-center">
                {showModalGasto && (
                  <ModalAdicionar
                    title="Adicionar Gasto"
                    isOpen={showModalGasto}
                    onClose={() => setShowModalGasto(false)}
                    onSubmit={() => {
                      /* handle submit logic here */
                    }}
                  />
                )}
              </div>
            </div>
            <div>
              {entradaDoDia(selectedDate, mockSaida).map((saida) => (
                <div
                  key={saida.id}
                  className="flex justify-center rounded-lg bg-slate-100 p-4"
                >
                  <p>
                    {saida.descricao} - R$ {saida.valor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
