import { render, screen, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SheetOpenProvider, { useSheetOpenContext, ISheetIsOpenContext } from '../SheetOpenProvider';

const TestComponent = () => {
    const { isSheetOpen, openSheet, closeSheet } = useSheetOpenContext() as ISheetIsOpenContext;

    return (
        <div>
            <div data-testid="sheet-status">{isSheetOpen ? 'Open' : 'Closed'}</div>
            <button onClick={openSheet}>Open Sheet</button>
            <button onClick={closeSheet}>Close Sheet</button>
        </div>
    );
};

describe('SheetOpenProvider', () => {
    it('should provide default sheet status', () => {
        render(
            <SheetOpenProvider>
                <TestComponent />
            </SheetOpenProvider>
        );

        expect(screen.getByTestId('sheet-status').textContent).toBe('Closed');
    });

    it('should open the sheet', () => {
        render(
            <SheetOpenProvider>
                <TestComponent />
            </SheetOpenProvider>
        );

        act(() => {
            screen.getByText('Open Sheet').click();
        });

        expect(screen.getByTestId('sheet-status').textContent).toBe('Open');
    });

    it('should close the sheet', () => {
        render(
            <SheetOpenProvider>
                <TestComponent />
            </SheetOpenProvider>
        );

        act(() => {
            screen.getByText('Open Sheet').click();
            screen.getByText('Close Sheet').click();
        });

        expect(screen.getByTestId('sheet-status').textContent).toBe('Closed');
    });
});
