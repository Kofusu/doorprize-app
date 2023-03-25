import { PrimaryButton } from "@/components/atoms/Buttons"
import { RegularText } from "@/components/atoms/Texts"
import React from "react"
import { RiFileExcel2Line } from "react-icons/ri"
import { read, utils } from "xlsx"

const ImportExcelButton = ({ onChange }) => {
  const handleImport = (event) => {
    const files = event.target.files
    if (files.length) {
      const file = files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        const wb = read(event.target.result)
        const sheets = wb.SheetNames

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]])
          onChange(rows)
        }
      }
      reader.readAsArrayBuffer(file)
    }
  }
  return (
    <PrimaryButton className='relative right-0'>
      <label htmlFor="addUserInputExcel" className="flex items-center justify-center">
        <RiFileExcel2Line size={20} />
        <RegularText className="ml-2">Import Excel</RegularText>
      </label>
      <input
        type="file"
        id="addUserInputExcel"
        onChange={handleImport}
        className="hidden"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
    </PrimaryButton>
  )
}

export default ImportExcelButton
