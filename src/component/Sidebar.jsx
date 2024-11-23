import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { PiUserThin } from "react-icons/pi";
const Sidebar = () => {
  const sidebarItem = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItem2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Playlist",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <GoHome />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: <AiOutlineLike />,
    },
  ];
  return (
    <div className="px-6 w-[15%]">
      <div className="items-center space-y-3">
        {sidebarItem.map((item, i) => {
          return (
            <div
              key={i}
              className="flex items-center space-x-6 hover:bg-slate-300 duration-300 p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
        <br />
        <hr />
        {sidebarItem2.map((item, i) => {
          return (
            <div
              key={i}
              className="flex items-center space-x-6 hover:bg-slate-300 duration-300 p-1"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
