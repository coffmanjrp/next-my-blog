import { FC } from 'react';

type Props = {
  isMobileMenu: boolean;
};

const SearchBox: FC<Props> = ({ isMobileMenu }) => {
  return (
    <div className={`md:mr-2 md:inline-block ${isMobileMenu ? '' : 'hidden'} `}>
      <div className="relative w-full md:w-64">
        <input
          type="search"
          className="appearance-none border rounded py-2 px-3 leading-tight w-full focus:outline-none focus:ring"
          aria-label="Search"
          placeholder="Search"
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default SearchBox;
