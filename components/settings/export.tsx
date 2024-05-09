import { CopyIcon, DownloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { exportToPdf, isValidPDFFileName } from "@/lib/utils";
import { useState } from "react";

const Export = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const onCopy = () => {
    if (!fileName) return;

    navigator.clipboard.writeText(fileName);
  };

  const onDownload = () => {
    if (!fileName) return;

    exportToPdf(fileName);
  };

  return (
    <div className="flex flex-col gap-3 px-5 py-3">
      <h3 className="text-[10px] uppercase">Export</h3>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full border border-primary-grey-100 hover:bg-primary-green hover:text-primary-black"
          >
            Export to PDF
          </Button>
        </DialogTrigger>
        <DialogContent className="border-primary-grey-200 bg-primary-black text-primary-grey-300 sm:max-w-md border">
          <DialogHeader>
            <DialogTitle className="uppercase text-sm">
              Export to PDF
            </DialogTitle>
            <DialogDescription className="uppercase text-xs">
              Name your figpro file and export it to your device
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                className="text-sm bg-primary-grey-300 text-primary-grey-100"
                value={fileName || ""}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3 border border-primary-grey-100 hover:bg-primary-green hover:text-primary-black"
              onClick={onCopy}
              disabled={!fileName}
            >
              <span className="sr-only">Copy</span>
              <CopyIcon className="h-4 w-4" />
            </Button>
            <Button
              type="submit"
              size="sm"
              className="px-3 border border-primary-grey-100 hover:bg-primary-green hover:text-primary-black"
              onClick={onDownload}
              disabled={!isValidPDFFileName(fileName || "")}
            >
              <span className="sr-only">Copy</span>
              <DownloadIcon className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Export;
