'use client';

import CompanyForm, { CompanyFormProps } from './company-form';
import Modal, { ModalProps } from './modal';

export interface CompanyModalFormProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyModalForm({
  onSubmit,
  ...rest
}: CompanyModalFormProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
