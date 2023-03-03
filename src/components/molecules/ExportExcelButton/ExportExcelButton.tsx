import { NoBGButton, PrimaryButton } from "@/components/atoms/Buttons";
import * as FileSaver from "file-saver";
import React, { FC } from "react";
import XLSX from "sheetjs-style";
import { RiFileExcel2Line } from "react-icons/ri";
import { RegularText } from "@/components/atoms/Texts";

type Props = {
  excelData: any;
  fileName: any;
};

const ExportExcelButton: FC<Props> = ({ excelData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.dpreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <PrimaryButton onClick={exportToExcel} className="flex items-center justify-center">
      <RiFileExcel2Line size={20} />
      <RegularText className="ml-2">Export Excel</RegularText>
    </PrimaryButton>
  );
};

export default ExportExcelButton;
