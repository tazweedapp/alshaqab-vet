"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PDFViewModal } from "../PDFView";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState();
  const formattedPathname = pathname.substring(1);

  useEffect(() => {
    const file = `${process.env.NEXT_PUBLIC_FILE_URL}${formattedPathname}.pdf`;
    if (file) {
      setIsOpen(true);
      setFile(file);
    }
  }, [formattedPathname, router]);

  const closePDF = () => {
    setIsOpen(false);
    router.push("/");
  };

  return <PDFViewModal isOpen={isOpen} file={file} handleClose={closePDF} />;
};

export default Page;
