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

