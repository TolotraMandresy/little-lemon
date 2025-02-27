import { render, screen, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ToastProvider, { useToastContext, IToastContext } from '../ToastProvider';

const TestComponent = () => {
    const { isOpen, message, openToast, closeToast } = useToastContext() as IToastContext;

    return (
        <div>
            <div data-testid="toast-status">{isOpen ? 'Open' : 'Closed'}</div>
            <div data-testid="toast-message">{message}</div>
            <button onClick={() => openToast('Test Message')}>Open Toast</button>
            <button onClick={closeToast}>Close Toast</button>
        </div>
    );
};

describe('ToastProvider', () => {
    it('should provide default toast status', () => {
        render(
            <ToastProvider>
                <TestComponent />
            </ToastProvider>
        );

        expect(screen.getByTestId('toast-status').textContent).toBe('Closed');
        expect(screen.getByTestId('toast-message').textContent).toBe('');
    });

    it('should open the toast with a message', () => {
        render(
            <ToastProvider>
                <TestComponent />
            </ToastProvider>
        );

        act(() => {
            screen.getByText('Open Toast').click();
        });

        expect(screen.getByTestId('toast-status').textContent).toBe('Open');
        expect(screen.getByTestId('toast-message').textContent).toBe('Test Message');
    });

    it('should close the toast', () => {
        render(
            <ToastProvider>
                <TestComponent />
            </ToastProvider>
        );

        act(() => {
            screen.getByText('Open Toast').click();
            screen.getByText('Close Toast').click();
        });

        expect(screen.getByTestId('toast-status').textContent).toBe('Closed');
        expect(screen.getByTestId('toast-message').textContent).toBe('');
    });
});
