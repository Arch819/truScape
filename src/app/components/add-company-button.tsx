'use client';
import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';
// import CompanyModalForm from './company-form-modal';
const CompanyModalForm = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyModalForm
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </div>
  );
}
