import { render, screen } from '@testing-library/react';
import React from 'react';
import Page from '../app/(root)/page.tsx';

jest.mock('../app/(root)/Home page/CEO', () => () => (
  <div data-testid="ceo-component">Mocked Ceo Component</div>
));

describe('Page Component', () => {
  it('should render the Ceo component', () => {
    render(<Page />);

    const ceoComponent = screen.getByTestId('ceo-component');
    expect(ceoComponent).toBeInTheDocument();
    expect(ceoComponent).toHaveTextContent('Mocked Ceo Component');
  });
});
