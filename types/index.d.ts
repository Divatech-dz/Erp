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