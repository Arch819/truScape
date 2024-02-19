'use client';

import CompanyForm from './company-form';
import Modal, { ModalProps } from './modal';

export default function CompanyModalForm({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
