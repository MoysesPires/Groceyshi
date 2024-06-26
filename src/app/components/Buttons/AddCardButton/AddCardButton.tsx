import React, { ReactNode } from "react";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";
import { Paragraph } from "../../Typograpy/Paragraph";


interface AddCardButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function AddCardButtonComponent({
    children,
  ...props
}: AddCardButtonComponentProps) {

  return (
    <button
      {...props}
      className=" w-[90px] h-[34px] p-0.5 bg-green-100 hover:bg-green-200 ounded-sm justify-center items-center gap-[5px] inline-flex "
    >
    <Paragraph type="p4" className="text-primary-200 font-medium">{children}</Paragraph>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <g clip-path="url(#clip0_208_1964)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 11C3.75 10.4477 4.19772 10 4.75 10C5.30228 10 5.75 10.4477 5.75 11C5.75 11.5523 5.30228 12 4.75 12C4.19772 12 3.75 11.5523 3.75 11Z" fill="#3BB77E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 11C9.25 10.4477 9.69772 10 10.25 10C10.8023 10 11.25 10.4477 11.25 11C11.25 11.5523 10.8023 12 10.25 12C9.69772 12 9.25 11.5523 9.25 11Z" fill="#3BB77E"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 1C0.25 0.723858 0.473858 0.5 0.75 0.5H2.75C2.98831 0.5 3.19351 0.668193 3.24028 0.901872L3.66022 3H11.75C11.899 3 12.0403 3.06646 12.1352 3.18128C12.2302 3.29609 12.2691 3.44729 12.2411 3.59366L11.4404 7.79241C11.3719 8.13771 11.184 8.44788 10.9098 8.66863C10.6369 8.88829 10.2958 9.00548 9.94568 9H5.09432C4.74419 9.00548 4.4031 8.88829 4.13024 8.66863C3.85612 8.44797 3.66832 8.13796 3.59966 7.79283C3.59964 7.79269 3.59969 7.79297 3.59966 7.79283L2.76439 3.6196C2.76101 3.6058 2.75819 3.59177 2.75598 3.57754L2.34016 1.5H0.75C0.473858 1.5 0.25 1.27614 0.25 1ZM3.86036 4L4.58042 7.59759C4.60328 7.71269 4.6659 7.81608 4.75731 7.88967C4.84872 7.96325 4.96309 8.00234 5.08042 8.00009L5.09 8H9.95L9.95958 8.00009C10.0769 8.00234 10.1913 7.96325 10.2827 7.88967C10.3737 7.81642 10.4361 7.71365 10.4593 7.5992L11.1456 4H3.86036Z" fill="#3BB77E"/>
        </g>
        <defs>
            <clipPath id="clip0_208_1964">
            <rect width="12" height="12" fill="white" transform="translate(0.25 0.5)"/>
            </clipPath>
        </defs>
    </svg>
      
    </button>
  );
}
