import { ReactNode } from "react";

const Card = (args:{children:ReactNode, bg:string}) => {
  return (
    <div className={`${args.bg == "" ? "bg-gray-100": args.bg} p-6 rounded-lg shadow-md`}>
        {args.children}
    </div>
  );
};

export default Card;