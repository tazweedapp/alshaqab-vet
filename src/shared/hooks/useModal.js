import { useState } from "react";

/**
 * Modal / Drawer Hook
 * @returns [isModalOpen, openModal, closeModal]
 */
const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(!isModalOpen);
  return [isModalOpen, openModal, closeModal];
};

export default useModal;
