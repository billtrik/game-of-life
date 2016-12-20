import React from 'react';
import Table from '../table/container';
import NextStepButton from './next-step/container';
import ResetButton from './reset/container';

export default () => (
  <section className='container'>
    <header className='page-header'>
      <h1>Game Of Life</h1>
    </header>
    <Table />
    <NextStepButton />
    <ResetButton />
  </section>
);
