import React from "react";

type Props = {
  searchTerm: string;
};

const NotFound = ({ searchTerm }: Props) => {
  return <div className="h-full min-h-screen">{searchTerm} Not Found</div>;
};

export default NotFound;
