import {
  BellIcon,
  Cog6ToothIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import FilterIcon from "@/components/icons/FilterIcon";
import SearchIcon from "@/components/icons/SearchIcon";

const Header = () => {
  return (
    <header className="bg-white mb-8 py-8 px-6 md:px-[60px] md:py-10">
      {/* Navigation */}
      <nav className=" container mx-auto max-w-[1440px]">
        <div className="flex justify-between items-center h-full gap-x-5">
          <div className="flex items-center flex-1 gap-x-16">
            <h1 className="text-primary-500 font-bold text-2xl md:text-[32px] uppercase">
              morent
            </h1>
            {/* desktop search section */}
            <form className="hidden md:flex items-center py-[10px] px-5 border rounded-[70px] max-w-[492px] flex-1">
              <SearchIcon />
              <input
                type="search"
                className="ml-5 font-medium text-sm w-full outline-none"
                placeholder="Search something here"
              />
              <button>
                <FilterIcon />
              </button>
            </form>
          </div>
          <div className="flex items-center gap-x-5">
            <button className="p-[10px] border rounded-full hidden md:block">
              <HeartIcon className="w-6 h-6 fill-secondary-400" />
            </button>
            <button className="p-[10px] border rounded-full hidden md:block">
              <BellIcon className="w-6 h-6 fill-secondary-400" />
            </button>
            <button className="p-[10px] border rounded-full hidden md:block">
              <Cog6ToothIcon className="w-6 h-6 fill-secondary-400" />
            </button>
            <button className="p-[10px] border rounded-full">
              <UserIcon className="w-6 h-6 fill-secondary-400" />
            </button>
          </div>
        </div>
        {/* mobile search section */}
        <form className="flex items-center gap-x-4 w-full md:hidden pb-8 px-6">
          <div className=" px-6 flex items-center bg-white rounded-[10px] border flex-1">
            <SearchIcon />
            <input
              type="search"
              className="ml-2 font-medium text-sm w-full h-12 outline-none"
              placeholder="Search something here"
            />
          </div>
          <button className="border rounded-[10px] p-3">
            <FilterIcon />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
