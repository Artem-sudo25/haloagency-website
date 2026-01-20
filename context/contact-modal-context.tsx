"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface PrefilledData {
    service?: string;
    package_name?: string;
    message?: string;
}

interface ContactModalContextType {
    isOpen: boolean;
    prefilledData: PrefilledData;
    open: (data?: PrefilledData) => void;
    close: () => void;
    toggle: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [prefilledData, setPrefilledData] = useState<PrefilledData>({});

    const open = (data?: PrefilledData) => {
        if (data) {
            setPrefilledData(data);
        }
        setIsOpen(true);
    };
    
    const close = () => {
        setIsOpen(false);
        // Clear prefilled data after modal closes
        setTimeout(() => setPrefilledData({}), 300);
    };
    
    const toggle = () => setIsOpen((prev) => !prev);

    return (
        <ContactModalContext.Provider value={{ isOpen, prefilledData, open, close, toggle }}>
            {children}
        </ContactModalContext.Provider>
    );
}

export function useContactModal() {
    const context = useContext(ContactModalContext);
    if (context === undefined) {
        throw new Error("useContactModal must be used within a ContactModalProvider");
    }
    return context;
}
