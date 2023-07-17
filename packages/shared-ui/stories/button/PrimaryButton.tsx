import React from 'react';

interface Props extends HTMLButtonElement {
  label: string;
}

export default function PrimaryButton({ label }: Props) {
  console.log(label);
  return (
    <div>
      <div />
      <div>
        <h1>test 중 입니다</h1>
      </div>
      <div />
    </div>
  );
}
