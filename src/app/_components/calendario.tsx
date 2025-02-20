"use strict";
"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import React from "react";

interface CalendarioProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const Calendario: React.FC<CalendarioProps> = ({
  selectedDate,
  onDateChange,
}) => {
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={(date) => {
        if (date && date instanceof Date) onDateChange(date); // Atualiza a data se for válida
      }}
      footer={
        selectedDate
          ? `Selecionado: ${selectedDate.toLocaleDateString()}`
          : "Escolha uma data."
      }
    />
  );
};

export default Calendario;
