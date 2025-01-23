import {LucideIcon} from "lucide-react";

import {Dispatch} from "react";


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
    setFournisseur?: (value: (((prevState: number) => number) | number)) => void,
    setCaisse?: (value: (((prevState: number) => number) | number)) => void,
    setSearch?: (value: (((prevState: string) => string) | string)) => void,
    setEntrepot?: (value: (((prevState: number) => number) | number)) => void,
    setEntrepotDepart?: (value: (((prevState: number) => number) | number)) => void,
    setEntrepotArrive?: (value: (((prevState: number) => number) | number)) => void,
    categories?: { id: string; category: string; }[],
    entrepots?: { id: string; entrepot: string; }[],
    fournisseurs?: { id: string; fournisseur: string; }[],
    startDate?: string,
    setStartDate?: sting,
    endDate?: sting,
    setEndDate?: sting,
    setUserId?: (value: (((prevState: number) => number) | number)) => void,
    salesUsers?: any[],
    setClientType?: (value: (string | ((prevState: string) => string))) => void,
    isLoading?: false | true | boolean,
    decaleJuste?: string,
    setDecaleJuste?:string
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
    name: string;
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
    fournisseurs?: Array<{ id: string; fournisseur: string }>;
    entrepots?: Array<{ id: string; entrepot: string }>;
    setCategory?: Dispatch<SetStateAction<number>>;
    setFournisseur?: Dispatch<SetStateAction<number>>;
    setEntrepot?: Dispatch<SetStateAction<number>>;
    setCurrentPage?: Dispatch<SetStateAction<number>>;
    setStartDate?: Dispatch<setStateAction<string>>,
    setEndDate?: Dispatch<setStateAction<string>>,
    startDate?: string,
    endDate?: string,
    setUserId?: Dispatch<SetStateAction<number>>;
    salesUsers?: any[],
    setClientType?: Dispatch<SetStateAction<string>>;
    setEntrepots?: Dispatch<SetStateAction<number>>;
    setEntrepotDepart?: Dispatch<SetStateAction<number>>;
    setEntrepotArrive?: Dispatch<SetStateAction<number>>;

    
    setDecaleJuste?: Dispatch<setStateAction<string>>,
    decaleJuste?: string,
}

export type ComponentsRegistryKey = 'utilisateurs' | 'produits' | 'PageSalarie' | 'avanceSalaire' | 'Pointage' | 'listeClients' | 'ClientProspect' | 'bons-commande' | 'families' | 'listePrix'|'entrepotsProduits' |'cloture'|'etatStock' | 'Facture' | 'bonsRetourVente' | 'bonsDevis' | 'verificationStock' | 'bonsEntree' | 'bonsTransfert';
export type ComponentRegistry = {
    [key in ComponentsRegistryKey]: () => JSX.Element | null;
};

export interface TopContentProps {
    setVisibleColumns: React.Dispatch<React.SetStateAction<Set<string>>>,
    visibleColumns: Set<string>,
    columnNames?: rowsType[],
    
    setCategory?: React.Dispatch<React.SetStateAction<number>>,
    categories?: Array<{ id: string; category: string }>,
    setFournisseur?: React.Dispatch<React.SetStateAction<number>>,
    fournisseurs?: Array<{ id: string; fournisseur: string }>,
    setEntrepot?: React.Dispatch<React.SetStateAction<number>>,
    entrepots?: Array<{ id: string; entrepot: string }>,
    setCurrentPage?: React.Dispatch<React.SetStateAction<number>>,
    setSearch?: ((value: (((prevState: string) => string) | string)) => void),
    startDate?: string,
    setStartDate?: React.Dispatch<React.SetStateAction<string>>,
    endDate?: string,
    setEndDate?: React.Dispatch<React.SetStateAction<string>>,
    setClientType?: React.Dispatch<React.SetStateAction<string>>,
    setUserId?: React.Dispatch<React.SetStateAction<number>>,
    salesUsers?: any[],
    setEntrepotDepart?: React.Dispatch<React.SetStateAction<number>>,
    setEntrepotArrive?: React.Dispatch<React.SetStateAction<number>>,
    decaleJuste?: string,
    setDecaleJuste?: React.Dispatch<React.SetStateAction<string>>,
}