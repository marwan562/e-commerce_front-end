type NavLinkType = {
  isActive: boolean;
};

export const handleStyleActive = ({ isActive }: NavLinkType) =>
  isActive
    ? "text-gray-700 text-[17px] transition-all duration-200"
    : " text-gray-500 transition hover:text-gray-500/75";

export const handleActiveLogin = ({ isActive }: NavLinkType) =>
  isActive
    ? "rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium text-white shadow "
    : "rounded-md bg-gray-600 px-5 py-2.5 text-sm font-medium text-white shadow";

export const handleActiveRegister = ({ isActive }: NavLinkType) =>
  isActive
    ? "rounded-md bg-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 "
    : "rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-600";

export const handleAciveShowMenu = ({ isActive }: NavLinkType) =>
  isActive
    ? " active:bg-gray-500 menuBarActive"
    : " active:bg-gray-500 menuBar";
