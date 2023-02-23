import { useState } from "react";

const useUsers = (users: any) => {
  const [data, setData] = useState<any>(users);

  return { data };
};

export default useUsers;
