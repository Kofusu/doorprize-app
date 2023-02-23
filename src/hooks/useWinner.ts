import { useState } from "react";

const useWinner = (users: any) => {
  const [data, setData] = useState<any>(users);
  return { data };
};

export default useWinner;
