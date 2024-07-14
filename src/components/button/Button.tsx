import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, className, ...rest }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            className={`button ${className || ''}`}
            onClick={handleClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
