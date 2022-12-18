import { createContext, useState } from "react";

interface iDialogContextProps {
    children: React.ReactNode
}

interface iDialogContext {
    openDialog: boolean,
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogContext = createContext({} as iDialogContext)

export function DialogProvider ( { children }: iDialogContextProps) {
    const [openDialog, setOpenDialog] = useState(false)

    return (
        <DialogContext.Provider value={{ openDialog, setOpenDialog }}>
            {children}
        </DialogContext.Provider>
    )
}