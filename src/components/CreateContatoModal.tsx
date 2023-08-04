import React from 'react';
import Modal from 'react-modal'
import CreateContatoForm from './CreateContato';

interface CreateContatoModalProps {
    isOpen: boolean;
    onClose: () => void
}
const CreateContatoModal: React.FC<CreateContatoModalProps> = ( {isOpen, onClose} ) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <CreateContatoForm onClose={onClose}/>
    </Modal>
  )
}

export default CreateContatoModal