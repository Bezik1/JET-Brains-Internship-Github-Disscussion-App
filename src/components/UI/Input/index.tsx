import React from "react";
import "./index.css";

const Input = React.forwardRef<HTMLInputElement, {
    className?: string;
    placeholder?: string;
    defaultValue?: string;
}>(({ className, placeholder, defaultValue }, ref) => {
    return (
        <div className="input-container">
            <input
                ref={ref}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className={`input ${className}`}
            />
        </div>
    );
});

export default Input;
