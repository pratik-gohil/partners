"use client"
import useScrollBlock from "@/lib/hooks/useScrollBlock";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
type ClientPortalInterface = {
    children: React.ReactNode;
    show?: boolean;
    onClose?: () => void;
    selector: string;
};


const ClientPortal = ({ children, selector, show }: ClientPortalInterface) => {
    const [blockScroll, allowScroll] = useScrollBlock()
    const ref = useRef<Element | null>(null);

    useEffect(() => {
        ref.current = document.getElementById(selector);
    }, [selector]);

    useEffect(() => {
        if (show) {
            blockScroll()
        }
        return () => {
            allowScroll()
        };
    }, [show]);

    return show && ref.current ? createPortal(children, ref.current) : null;
};

export default ClientPortal;