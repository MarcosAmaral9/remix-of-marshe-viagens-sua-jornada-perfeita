import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

interface OrcamentoDialogProps {
  defaultDestination?: string;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const OrcamentoDialog = ({ defaultDestination, trigger, open: controlledOpen, onOpenChange }: OrcamentoDialogProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <span onClick={() => setOpen(true)} className="cursor-pointer">
          {trigger}
        </span>
      ) : (
        <Button variant="outline" className="w-full gap-2" onClick={() => setOpen(true)}>
          <FileText className="w-4 h-4" /> Solicitar Orçamento
        </Button>
      )}
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Monte sua Viagem dos Sonhos</DialogTitle>
          <DialogDescription>
            Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp com um orçamento personalizado.
          </DialogDescription>
        </DialogHeader>
        <LeadCaptureForm
          variant="dialog"
          defaultDestination={defaultDestination}
          onSuccess={() => setTimeout(() => setOpen(false), 3000)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default OrcamentoDialog;
