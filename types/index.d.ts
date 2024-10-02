import { LucideIcon } from "lucide-react";

import { LucideIcon } from "lucide-react";

declare interface FooterProps {
  type?: 'mobile' | 'desktop';
}

declare interface HeaderBoxProps {
  type?: 'title' | 'greeting';
  title: string;
  subtext: string;
  user?: string;
}
declare interface CardProps {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
  color:string
};
export type SalesProps = {
  name: string
  email: string
  salesAmount: string
}
export type TabsProps={
  tabName:string;
  itemName:string[]
}
interface TabsNameInterface {
  [key: string]: {
    [section: string]: string[];
  };
}
export type Route = {
  name: string;
  link: string;
};

export type SidebarLink = {
  id: string;
  imgURL: string;
  route: Route[];
  label: string;
};

export type AccordionType=SidebarLink &{
  isActive: boolean;
  handleAccordionClick: (label: string) => void;

}