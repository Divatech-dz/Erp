import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthForm from '../components/auth-form.tsx';
import { AuthType } from '../constants/index.tsx';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('AuthForm Component', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form with username and password fields', () => {
    render(<AuthForm type={AuthType.SignIn} />);

    expect(screen.getByLabelText(/Nom d'utilisateur/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mot de passe/i)).toBeInTheDocument();
  });

  it('shows and hides the password when the unlock button is clicked', () => {
    render(<AuthForm type={AuthType.SignIn} />);

    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const unlockButton = screen.getByTitle(/Unlock/i);

    // Initially, the password should be hidden
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Click the unlock button to show the password
    fireEvent.click(unlockButton);
    expect(passwordInput).toHaveAttribute('type', 'text');

    // Click the unlock button again to hide the password
    fireEvent.click(unlockButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('submits the form and navigates to the home page', () => {
    render(<AuthForm type={AuthType.SignIn} />);

    const usernameInput = screen.getByLabelText(/Nom d'utilisateur/i);
    const passwordInput = screen.getByLabelText(/Mot de passe/i);
    const submitButton = screen.getByRole('button', { name: /Se connecter/i });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
