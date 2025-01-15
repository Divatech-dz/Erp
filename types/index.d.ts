import {LucideIcon} from "lucide-react";


// interface
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
    color: string
};

declare interface TableProps {
    columnNames?: rowsType[],
    columnData?: Record<string, any>[],
    currentPage?: number,
    setCurrentPage?: (value: (((prevState: number) => number) | number)) => void,
    productData?: T | any[] | undefined,
    totalPages?: number,
    setCategory?: (value: (((prevState: number) => number) | number)) => void,
    setSearch?: (value: (((prevState: string) => string) | string)) => void,
    categories?: { id: string; category: string; }[],
    startDate?: string,
    setStartDate?: sting,
    endDate?: sting,
    setEndDate?: sting,
    setUserId?: (value: (((prevState: number) => number) | number)) => void,
    salesUsers?: any[],
    setClientType?: (value: (string | ((prevState: string) => string))) => void,
    isLoading?: false | true | boolean
}

//types
export type SalesProps = {
    name: string
    email: string
    salesAmount: string
}
export type TabsProps = {
    tabName: string;
    itemName: string[]
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

export type AccordionType = SidebarLink & {
    isActive: boolean;

}

export type rowsType = {
  id: string;
  name:string;  
  sort?: boolean;
  sortBy?: string;
};

export type Column = rowsType & {
    id: string;
    opensModal?: boolean;
};

export interface ComponentsConfig {
  router?: AppRouterInstance;
  columnNames?: rowsType[];
  handleColumnVisibilityChange: (columnKey: string) => void;
  visibleColumns: Set<string>;
  categories?: Array<{ id: string; category: string }>;
  setCategory?: Dispatch<SetStateAction<number>>;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
}
export type ComponentsRegistryKey = 'utilisateurs' | 'produits';
export type ComponentRegistry = {
  [key in ComponentsRegistryKey]: () => JSX.Element| null;
};

export interface TopContentProps {
  setVisibleColumns: React.Dispatch<React.SetStateAction<Set<string>>>,
  visibleColumns: Set<string>,
  columnNames?: rowsType[],
  setCategory?: React.Dispatch<React.SetStateAction<number>>,
  categories?: Array<{ id: string; category: string }>,
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>,
  setSearch?: ((value: (((prevState: string) => string) | string)) => void) ,
  startDate?: string,
  setStartDate?: React.Dispatch<React.SetStateAction<string>>,
  endDate?: string,
  setEndDate?: React.Dispatch<React.SetStateAction<string>>,
  setClientType?: React.Dispatch<React.SetStateAction<string>>,
  setUserId?: React.Dispatch<React.SetStateAction<number>>,
  salesUsers?: any[]
}