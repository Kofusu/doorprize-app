import React, { FC } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";

import { MediumText } from "@/components/atoms/Texts";
import { LogoutConfirmModal } from "../Modal";

interface Props {
  name: string;
}

const HeaderGreeting: FC<Props> = ({ name }) => {
  return (
    <div className="flex items-center">
      <MediumText className="text-[20px]">Halo, {name}</MediumText>
      <CgProfile size={30} className="ml-[10px] mr-[15px]" />
      <LogoutConfirmModal>
        <HiOutlineLogout
          size={30}
          className="hover:text-red-600 cursor-pointer"
        />
      </LogoutConfirmModal>
    </div>
  );
};

export default HeaderGreeting;
