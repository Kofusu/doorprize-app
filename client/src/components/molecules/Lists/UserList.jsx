import React from "react";

import { Column, Row } from "@/components/atoms/Grid";
import ListTitle from "@/components/atoms/Titles/ListTitle";
import { ContentAksi, ContentList } from "../ContentList";
import { FiUserMinus, FiUserX } from "react-icons/fi";
import { MediumText } from "@/components/atoms/Texts";

const UserList = ({ users, changeStatus }) => {

  return (
    <div className="mx-5 h-[465px] mt-8">
      <Column className="gap-y-0">
        <Row className="">
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-1">
            ID
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            Email
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            Nama Lengkap
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            No. HP
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            Domisili
          </ListTitle>
          <ListTitle className="border-[1px] bg-default px-2 py-2 flex justify-center items-center flex-[4]">
            Aksi
          </ListTitle>
        </Row>

        {users?.map((user) => (
          <Row key={user?.id_user}>
            <ContentList
              className="border-[1px] px-2 py-2 flex-1"
              text={user?.id_user}
            />
            <ContentList
              className="border-[1px] px-2 py-2 flex-[4]"
              text={user?.email}
            />
            <ContentList
              className="border-[1px] px-2 py-2 flex-[4]"
              text={user?.nama_user}
            />
            <ContentList
              className="border-[1px] px-2 py-2 flex-[4]"
              text={user?.no_hp}
            />
            <ContentList
              className="border-[1px] px-2 py-2 flex-[4]"
              text={user?.no_hp}
            />
            <ContentAksi className="border-[1px] px-2 py-2 flex-[4]">
              <button
                className="mx-auto bg-cusBlack px-4 py-2 rounded-lg text-white hover:opacity-80 active:opacity-60 flex items-center"
                onClick={() => changeStatus(user?.id_user, user?.status)}
              >
                {user?.status === "active" ? (
                  <>
                    <FiUserX className="text-inherit" size={24} />
                    <MediumText className="ml-2 text-[14px]">
                      Blacklist
                    </MediumText>
                  </>
                ) : (
                  <>
                    <FiUserMinus className="text-inherit" size={24} />
                    <MediumText className="ml-2 text-[14px]">
                      Unblacklist
                    </MediumText>
                  </>
                )}
              </button>
            </ContentAksi>
          </Row>
        ))}
      </Column>
    </div>
  );
};

export default UserList;
