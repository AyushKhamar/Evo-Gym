import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link } from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { ActionButton } from "@/shared/ActionButton";

export interface NavbarProps {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}
export const Navbar = (props: NavbarProps) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = props.isTopOfPage
    ? ""
    : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img src={Logo} alt="" />
            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} text-sm gap-8`}>
                  <Link
                    page="Home"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={props.selectedPage}
                    setSelectedPage={props.setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign in</p>
                  <ActionButton setSelectedPage={props.setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => {
                  setIsMenuToggled((current) => {
                    return !current;
                  });
                }}
              >
                <Bars3Icon className="h-5 w-5 text-white " />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button
              onClick={() => {
                setIsMenuToggled((current) => {
                  return !current;
                });
              }}
            >
              {" "}
              <XMarkIcon className="h-5 w-6 text-grey-400" />
            </button>
          </div>
          {/* Menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={props.selectedPage}
              setSelectedPage={props.setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={props.selectedPage}
              setSelectedPage={props.setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={props.selectedPage}
              setSelectedPage={props.setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={props.selectedPage}
              setSelectedPage={props.setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
