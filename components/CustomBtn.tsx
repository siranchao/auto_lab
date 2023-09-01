'use client';

import { CustomBtnProps } from "@/types";


export default function CustomBtn({title, btnType, styles, handleClick}: CustomBtnProps) {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${styles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>{title}</span>

        </button>
    )
}