import {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles: string;
    handleClick?:
   MouseEventHandler<HTMLButtonElement>;
   btnType?: "button" | "submit";
}

export interface SearchManufactureProps {
    manufacturer : string;
    setManuFacturer: (manufacturer : string) => void;
}