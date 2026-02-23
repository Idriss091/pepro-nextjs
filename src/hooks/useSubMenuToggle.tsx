const useSubMenuToggle = () => {
  const toggleSubMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const listItem = e.currentTarget.parentElement;
    if (!listItem) return;

    const subMenu = listItem.querySelector(
      "ul.dropdown-menu, ul.megamenu-content",
    ) as HTMLUListElement | null;

    if (!subMenu) return;

    e.preventDefault();
    listItem.classList.toggle("on");
    subMenu.style.maxHeight =
      subMenu.style.maxHeight === "20000px" ? "0" : "20000px";
  };

  return toggleSubMenu;
};

export default useSubMenuToggle;
