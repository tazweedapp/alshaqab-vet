"use client";

import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { PDFViewModal } from "../PDFView";
import { fileData } from "./fileData";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const toastId = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState();
  const formattedPathname = pathname.substring(1);

  useEffect(() => {
    const file = fileData.find(
      (file) => file.sin.toString() === formattedPathname
    );
    if (file) {
      if (!toast.isActive(toastId.current))
        toastId.current = toast.success("File verified successfully");
      setIsOpen(true);
      setFile(file);
    } else {
      if (!toast.isActive(toastId.current))
        toastId.current = toast.error("Document not found.");
      router.push("/");
    }
  }, [formattedPathname, router]);

  if (!file?.pdfLink) return;

  const closePDF = () => {
    setIsOpen(false);
    router.push("/");
  };

  return (
    <PDFViewModal isOpen={isOpen} file={file.pdfLink} handleClose={closePDF} />
  );
};

export default Page;
