import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
export interface LinkProps {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
export const Link = (props: LinkProps) => {
  const lowerCasePage = props.page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => {
        props.setSelectedPage(
          SelectedPage[lowerCasePage as keyof typeof SelectedPage],
        );
      }}
      className={`${props.selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
    >
      {props.page}
    </AnchorLink>
  );
};
