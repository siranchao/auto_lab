import { MouseEventHandler } from "react";

export interface CustomBtnProps {
    title: string, 
    btnType?: "button" | "submit",
    styles?: string, 
    handleClick?: MouseEventHandler<HTMLButtonElement>
}