export const handleStyleActive = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-gray-700 text-[17px] transition-all duration-200"
    : " text-gray-500 transition hover:text-gray-500/75";
