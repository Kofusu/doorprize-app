import { RegularText } from "@/components/atoms/Texts"
import { Modal } from "antd"
import React, { useState } from "react"

const AddPrizeModal = ({ isDisplay, onOk, onCancel, id_session }) => {
  const [unit, setUnit] = useState("")
  const [caption, setCaption] = useState("")
  const [file, setFile] = useState("")

  const [uploadData, setUploadData] = useState([])

  const onChangeUnit = (e) => {
    setUnit(e.target.value)
  }

  const onChangeCaption = (e) => {
    setCaption(e.target.value)
  }

  const onChangeFile = async (e) => {
    if (e.target.files) {
      const dataFile = e.target.files[0]
      setUploadData(URL.createObjectURL(dataFile))
      setFile(dataFile)
    }
  }

  const submitHandler = async () => {
    if (file) {
      onOk(unit, caption, file)
      setCaption("")
      setUnit("")
      setFile("")
      setUploadData("")
    }
  }

  return (
    <Modal
      open={isDisplay}
      onCancel={onCancel}
      onOk={submitHandler}
      title="Add Prize"
      okButtonProps={{
        className: "bg-secondary hover:opacity-70 text-white disabled:opacity-30",
        disabled: (!caption || !unit || !file || isNaN(parseInt(unit))),
      }}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col mt-4">
          <label className="mb-1">
            <RegularText className="text-[16px]">
              Write your unit here
            </RegularText>
          </label>
          <input
            onChange={onChangeUnit}
            value={unit}
            type="number"
            placeholder="unit"
            className="border-secondary border-2 p-2"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">
            <RegularText className="text-[16px]">
              Write your caption here
            </RegularText>
          </label>
          <input
            onChange={onChangeCaption}
            value={caption}
            type="text"
            placeholder="caption"
            className="border-secondary border-2 p-2"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">
            <RegularText className="text-[16px]">
              drop your image here
            </RegularText>
          </label>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-secondary border-dashed hover:border-solid rounded-lg cursor-pointer bg-inherit"
          >
            {file ? (
              <RegularText>Selected 1 image</RegularText>
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-cusBlack"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-cusBlack">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-cusBlack">SVG, PNG, JPG</p>
              </div>
            )}
            <input
              onChange={onChangeFile}
              name="theFiles"
              id="dropzone-file"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </label>
        </div>
      </form>
    </Modal>
  )
}

export default AddPrizeModal
