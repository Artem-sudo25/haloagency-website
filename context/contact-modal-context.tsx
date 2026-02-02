"use client";

import { createContext, useContext, useState, ReactNode, useCallback, useMemo } from "react";

interface PrefilledData {
    service?: string;
    package_name?: string;
    message?: string;
    value?: number;
    currency?: string;
}

interface ContactModalState {
    isOpen: boolean;
    prefilledData: PrefilledData;
}

interface ContactModalActions {
    open: (data?: PrefilledData) => void;
    close: () => void;
    toggle: () => void;
}

const ContactModalStateContext = createContext<ContactModalState | undefined>(undefined);
const ContactModalActionContext = createContext<ContactModalActions | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [prefilledData, setPrefilledData] = useState<PrefilledData>({});

    const open = useCallback((data?: PrefilledData) => {
        if (data) {
            setPrefilledData(data);
        }
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
        // Clear prefilled data after modal closes
        setTimeout(() => setPrefilledData({}), 300);
    }, []);

    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    // Memoize the actions object so it doesn't change on every render
    const actions = useMemo(() => ({ open, close, toggle }), [open, close, toggle]);

    // Memoize state object
    const state = useMemo(() => ({ isOpen, prefilledData }), [isOpen, prefilledData]);

    return (
        <ContactModalActionContext.Provider value={actions}>
            <ContactModalStateContext.Provider value={state}>
                {children}
            </ContactModalStateContext.Provider>
        </ContactModalActionContext.Provider>
    );
}

// Hook for components that need to read state (will re-render when modal opens/closes)
export function useContactModalState() {
    const context = useContext(ContactModalStateContext);
    if (context === undefined) {
        throw new Error("useContactModalState must be used within a ContactModalProvider");
    }
    return context;
}

// Hook for components that only need to trigger actions (won't re-render when modal opens/closes)
export function useContactModalActions() {
    const context = useContext(ContactModalActionContext);
    if (context === undefined) {
        throw new Error("useContactModalActions must be used within a ContactModalProvider");
    }
    return context;
}

// Legacy hook for backward compatibility (returns everything)
// Deprecated: Prefer using specific hooks to avoid unnecessary re-renders
export function useContactModal() {
    return { ...useContactModalState(), ...useContactModalActions() };
}
