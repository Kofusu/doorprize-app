import { NoBGButton, PrimaryButton } from "@/components/atoms/Buttons"
import React from "react"
// import XLSX from "sheetjs-style"
import { utils, writeFile } from "xlsx"
import { RiFileExcel2Line } from "react-icons/ri"
import { RegularText } from "@/components/atoms/Texts"

const ExportExcelButton = ({ excelData, fileName, title = "Export Excel", type = "primary" }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.dpreadsheetml.sheet;charset=UTF-8"
  const fileExtension = ".xlsx"

  const exportToExcel = async () => {
    const wb = utils.book_new()
    const ws = utils.json_to_sheet([])
    utils.sheet_add_json(ws, excelData, { origin: "A1", skipHeader: false })
    utils.book_append_sheet(wb, ws, "Report")
    writeFile(wb, fileName + fileExtension)
  }

  if (type === 'primary') {
    return (
      <PrimaryButton
        onClick={exportToExcel}
        className="flex items-center justify-center"
      >
        <RiFileExcel2Line size={20} />
        <RegularText className="ml-2">{title}</RegularText>
      </PrimaryButton>
    )
  }

  return (
    <NoBGButton
      onClick={exportToExcel}
      type
      className="flex items-center justify-center border-secondaryAdmin flex-1 bg-[#A2D5F2] bg-opacity-40  text-[14px]"
    >
      <RiFileExcel2Line size={20} />
      <RegularText className="ml-2">{title}</RegularText>
    </NoBGButton>
  )
}

export default ExportExcelButton
