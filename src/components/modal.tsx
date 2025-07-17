import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ModalProps{
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Modal = ({title, description, onClose, isOpen, children} : ModalProps) => {

    const onChange = (open: boolean) => {
        if(!isOpen){
            onClose();
            open;
        }
    }


    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>

                <div>{children}</div>
            </DialogContent>

        </Dialog>
    )
}

export default Modal