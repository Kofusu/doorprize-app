import { NoBGButton, PrimaryButton } from "@/components/atoms/Buttons"
import { ContainerMain } from "@/components/atoms/Container"
import { Main } from "@/components/atoms/Main"
import { SemiBoldText } from "@/components/atoms/Texts"
import { Title } from "@/components/atoms/Titles"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import { AdminTemplate } from "@/components/templates/AdminTemplate"
import { apiEndpoint } from "@/configs/config"
import { Modal } from "antd"
import axios from "axios"
import React from "react"

const Settings = () => {
  const showDeleteWinners = () => {
    Modal.confirm({
      title: "Hapus Semua Data Pemenang?",
      content: "Apakah anda ingin menghapus semua data pemenang?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axios.delete(`${apiEndpoint}/api/user/winner`)
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showDeleteUsers = () => {
    Modal.confirm({
      title: "Hapus Semua Data User?",
      content: "Apakah anda ingin menghapus semua data User?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axios.delete(`${apiEndpoint}/api/user`)
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showDeleteSessions = () => {
    Modal.confirm({
      title: "Hapus Semua Data Session?",
      content: "Apakah anda ingin menghapus semua data Session (termasuk data Doorprize)?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axios.delete(`${apiEndpoint}/api/session`)
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showDeleteAll = () => {
    Modal.confirm({
      title: "Hapus Semua Data?",
      content: "Apakah anda ingin menghapus semua data (termasuk data Doorprize, Sessions, User, Pemenang)?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axios.delete(`${apiEndpoint}/api/user`)
        axios.delete(`${apiEndpoint}/api/session`)
        axios.delete(`${apiEndpoint}/api/user/winner`)
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const blacklistAllUser = () => {
    Modal.confirm({
      title: "Blacklist Semua User?",
      content: "Apakah anda ingin blacklist semua user?",
      okText: "Yes",
      cancelText: "No",
      okType: "default",
      onOk() {
        axios.patch(`${apiEndpoint}/api/user/status/all`, {
          status: "active"
        }, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const unBlacklistAllUser = () => {
    Modal.confirm({
      title: "Blacklist Semua User?",
      content: "Apakah anda ingin blaclist semua user?",
      cancelText: "No",
      okType: "default",
      onOk() {
        axios.patch(`${apiEndpoint}/api/user/status/all`, {
          status: "blacklist"
        }, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <AdminTemplate>
      <Main>
        <TitleAdminPage title="Settings" />
        <ContainerMain className="px-5 py-8 mt-4 overflow-auto flex flex-col gap-[16px]">
          <Title level={2}>
            <SemiBoldText className='ml-2'>Users Section</SemiBoldText>
          </Title>
          <div className="flex">
            <NoBGButton className="flex-1" onClick={blacklistAllUser}>
              Blacklist All Users
            </NoBGButton>
            <NoBGButton className="flex-1" onClick={unBlacklistAllUser}>
              UnBlacklist All Users
            </NoBGButton>
          </div>
        </ContainerMain>

        <ContainerMain className="px-5 py-8 mt-4 overflow-auto flex flex-col gap-[16px]">
          <Title level={2}>
            <SemiBoldText className='ml-2'>Delete Section</SemiBoldText>
          </Title>
          <div className="flex">
            <NoBGButton className="flex-1 border-red-600 text-red-600" onClick={showDeleteWinners}>
              Delete All Winners
            </NoBGButton>
            <NoBGButton className="flex-1 border-red-600 text-red-600" onClick={showDeleteUsers}>
              Delete All Users
            </NoBGButton>
            <NoBGButton className="flex-1 border-red-600 text-red-600" onClick={showDeleteSessions}>
              Delete All Sessions
            </NoBGButton>
          </div>
          <div className="flex">
            <NoBGButton className="flex-1 border-red-600 text-red-600" onClick={showDeleteAll}>
              Delete All Project Data
            </NoBGButton>
          </div>
        </ContainerMain>
      </Main>
    </AdminTemplate>
  )
}

export default Settings
