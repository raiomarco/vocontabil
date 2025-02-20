"use strict";
"use client";
import React, { useState, Fragment } from "react";
import Calendario from "../calendario";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: {
    field1: Date;
    field2: string;
    field3: string;
    field4: string;
  }) => void;
}

const ModalAdicionar: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
}) => {
  const [formData, setFormData] = useState({
    field1: new Date(),
    field2: "",
    field3: "",
    field4: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex min-h-screen items-center justify-center px-4 text-center">
          {/* 🔥 BACKDROP */}
          <Transition.Child
            as="div"
            className="fixed inset-0 bg-black bg-opacity-25"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          />

          {/* 🔥 MODAL CONTAINER */}
          <Transition.Child
            as="div"
            className="fixed inset-0 flex items-center justify-center"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
              <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                {title}
              </Dialog.Title>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <Calendario
                    selectedDate={formData.field1}
                    onDateChange={(date) =>
                      setFormData({ ...formData, field1: date })
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Field 2:
                  </label>
                  <input
                    type="text"
                    name="field2"
                    value={formData.field2}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Field 3:
                  </label>
                  <input
                    type="text"
                    name="field3"
                    value={formData.field3}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="mr-2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalAdicionar;
