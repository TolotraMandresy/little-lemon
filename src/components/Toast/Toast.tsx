import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { IToastContext, useToastContext } from '../../provider/ToastProvider/ToastProvider';

export interface ToastProps {
    message: string;
    duration?: number;
    isOpen: boolean;
    onClose?: () => void;
}

const Toast = ({ duration = 5000, onClose }: ToastProps) => {
    const { isOpen, closeToast, message } = useToastContext() as IToastContext;

    const [isVisible, setIsVisible] = useState(isOpen);
    const [time, setTime] = useState(new Date());
    const toastRef = useRef<HTMLDivElement>(null);
    const [startY, setStartY] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(isOpen);
        if (isOpen) {
            setTime(new Date());
        }
    }, [isOpen]);

    useEffect(() => {      
        if (isVisible) {
            const hideTimer = setTimeout(() => {
                setIsVisible(false);
                closeToast()

                if (onClose) {
                    onClose();
                }
            }, duration);

            return () => {
                clearTimeout(hideTimer);
            };
        }
    }, [isVisible, duration, onClose]);

    const formatTime = (date: Date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours %= 12;
        hours = hours || 12;
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (startY === null) return;
        const currentY = e.touches[0].clientY;
        if (startY - currentY > 50) { // Adjust the threshold as needed
            setIsVisible(false);
            closeToast();

            if (onClose) {
                onClose();
            }
        }
    };

    const handleTouchEnd = () => {
        setStartY(null);
    };

    return ReactDOM.createPortal(
        <div
            ref={toastRef}
            className={`flex flex-row w-max gap-8 fixed top-4 left-1/2 transform -translate-x-1/2 bg-c-green-opaque text-white rounded-2xl shadow-lg p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100 z-[9999]' : 'opacity-0 -z-10'
                }`}
            style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '0.3s',
                transitionTimingFunction: 'ease-in-out',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 aspect-square text-c-yellow my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div className='my-auto'>
                <h3 className="text-lg font-semibold text-c-yellow">Reservation done</h3>
                <p className="text-sm">{message}</p>
            </div>
            <span className="ml-auto text-sm">{formatTime(time)}</span>
        </div>,
        document.body
    );
};

export default Toast;