import { HorizontalDivider } from "@/components/atoms/Divider";
import { RegularText } from "@/components/atoms/Texts";
import { Title } from "@/components/atoms/Titles";
import ListTitle from "@/components/atoms/Titles/ListTitle";
import React, { FC } from "react";
import { ContentList } from "../ContentList";

interface Props {}

const WinnerList: FC<Props> = () => {
  return (
    <div className="mx-5 grid grid-cols-4 gap-y-3 h-[300px] overflow-auto">
      <ListTitle>Nama Lengkap</ListTitle>
      <ListTitle>No. HP</ListTitle>
      <ListTitle>Domisili</ListTitle>
      <ListTitle>Mendapatkan</ListTitle>

      <ContentList text="Faizah Masturina Yuatno " />
      <ContentList text="087851933311" />
      <ContentList text="Depok" />
      <ContentList text="Aqua Dingin" />

      <ContentList text="Faizah Masturina Yuatno" />
      <ContentList text="087851933311" />
      <ContentList text="Depok" />
      <ContentList text="Aqua Dingin" />

      <ContentList text="Faizah Masturina Yuatno" />
      <ContentList text="087851933311" />
      <ContentList text="Depok" />
      <ContentList text="Aqua Dingin" />

      <ContentList text="Faizah Masturina Yuatno" />
      <ContentList text="087851933311" />
      <ContentList text="Depok" />
      <ContentList text="Aqua Dingin" />

      <ContentList text="Faizah Masturina Yuatno" />
      <ContentList text="087851933311" />
      <ContentList text="Depok" />
      <ContentList text="Aqua Dingin" />

      <ContentList text="Faizah Masturina Yuatno" />
      <ContentList text="087851933311" />
      <ContentList text="Depok" />
      <ContentList text="Aqua Dingin" />

      <ContentList text="Faizah Masturina Yuatno" />
      <ContentList text="087851933311" />
      <ContentList text="Depok" />
      <ContentList text="Aqua Dingin" />

      <ContentList text="Faizah Masturina Yuatno" />
      <ContentList text="087851933311" />
      <ContentList text="Depok" />
      <ContentList text="Aqua Dingin" />

      <ContentList text="Faizah Masturina Yuatno" />
      <ContentList text="087851933311" />
      <ContentList text="Depok" />
      <ContentList text="Aqua Dingin" />
    </div>
  );
};

export default WinnerList;
