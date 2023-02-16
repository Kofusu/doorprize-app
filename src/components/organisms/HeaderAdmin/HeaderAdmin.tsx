import { Container } from "@/components/atoms/Container";
import { HeaderGreeting } from "@/components/molecules/HeaderGreeting";
import { HeaderTitle } from "@/components/molecules/HeaderTitle";
import React, { FC, memo } from "react";

interface Props {}

const HeaderAdmin: FC<Props> = () => {
  return (
    <header className="flex items-center bg-secondaryAdmin text-cusWhite h-[75px] z-50 sticky top-0 left-0 right-0">
      <Container className="flex items-center justify-between">
        <HeaderTitle title="Admin" />
        <HeaderGreeting name="Rina" />
      </Container>
    </header>
  );
};

export default memo(HeaderAdmin);
