import AnchorLink from "react-anchor-link-smooth-scroll";
export interface LinkProps {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}
export const Link = (props: LinkProps) => {
  const lowerCasePage = props.page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => {
        props.setSelectedPage(lowerCasePage);
      }}
      className={`${props.selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
    >
      {props.page}
    </AnchorLink>
  );
};
