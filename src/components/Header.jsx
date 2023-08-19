function Header() {

  return (
    <header className="h-20 flex flex-row justify-between w-full items-center px-5">
      <h1 className="font-medium text-2xl">
        <a href="#">TREEMING BIRD</a>
      </h1>
      <div>
        <ul className="flex flex-row text-sm gap-3">
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">SHOP</a>
          </li>
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">COLLECTION</a>
          </li>
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">ABOUT</a>
          </li>
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">COMMUNITY</a>
          </li>
          <li className="hover:bg-neutral-200 p-2 duration-200 rounded-md">
            <a href="#">SEARCH</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
