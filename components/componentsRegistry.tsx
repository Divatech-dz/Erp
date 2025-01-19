import Image from 'next/image';
import {Button} from './ui/button';
import {Dropdown} from './table-components';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from './ui/select';
import {ComponentRegistry, ComponentsConfig} from '@/types';
import {icons} from '@/constants/icons';
import React from 'react';

const renderDropdown = (config: ComponentsConfig) => (
    <Dropdown
        label="Columns"
        icon={icons.ArrowDown}
        columns={config.columnNames}
        handleColumnVisibilityChange={config.handleColumnVisibilityChange}
        visibleColumns={config.visibleColumns}
        classNameTrigger="flex h-10 w-full items-center  justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
    />
)

const selectCategory = (config: ComponentsConfig) => (
    <Select
        onValueChange={(value: any) => {
            config.setCategory?.(Number(value));
            config.setCurrentPage?.(1);
        }}
    >
<<<<<<< HEAD
      <SelectTrigger className="w-[180px] h-10">
        <SelectValue placeholder="Filtrer par catégorie" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>Catégories</SelectLabel>
          <SelectItem value=" ">TOUTES</SelectItem>
          {config.categories?.map((cat) => (
            <SelectItem key={cat.id} value={cat.id}>
              {cat.category?.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
=======
        <SelectTrigger className="w-[180px] h-10">
            <SelectValue placeholder="Filtrer par catégorie"/>
        </SelectTrigger>
        <SelectContent className="bg-white">
            <SelectGroup>
                <SelectLabel>Catégories</SelectLabel>
                <SelectItem value=" ">TOUTES</SelectItem>
                {config.categories?.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                        {cat.category.toUpperCase()}
                    </SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
>>>>>>> e87421b8cd015ea1eb0a9a136b221c1a1d1493ee
    </Select>
);

const selectClientType = (config: ComponentsConfig) => (
    <Select
        onValueChange={(value: string) => {
            config.setClientType?.(value);
            config.setCurrentPage?.(1);
        }}
    >
        <SelectTrigger className="w-[180px] h-10">
            <SelectValue placeholder="Filtrer par type de client"/>
        </SelectTrigger>
        <SelectContent className="bg-white">
            <SelectGroup>
                <SelectLabel>Type de client</SelectLabel>
                <SelectItem value=" ">TOUS</SelectItem>
                <SelectItem value="Client final">Client final</SelectItem>
                <SelectItem value="Revendeur silver">Revendeur silver</SelectItem>
                <SelectItem value="Revendeur gold">Revendeur gold</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
)

const selectSalesUser = (config: ComponentsConfig) => (
    <React.Fragment>
        <Select
            onValueChange={(value: any) => {
                config.setUserId?.(Number(value));
                config.setCurrentPage?.(1);
            }}
        >
            <SelectTrigger className="w-[180px] h-10">
                <SelectValue placeholder="Filtrer par commercial"/>
            </SelectTrigger>
            <SelectContent className="bg-white">
                <SelectGroup>
                    <SelectLabel>Commercial</SelectLabel>
                    <SelectItem value=" ">TOUS</SelectItem>
                    {config.salesUsers?.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                            {user.username.toUpperCase()}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    </React.Fragment>
)

const renderDateRange = (config: ComponentsConfig) => (
    <>
        <input
            type="date"
            className="h-10 w-[180px] border border-input rounded-md px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Start Date"
            value={config.startDate}
            onChange={(e) => config.setStartDate?.(e.target.value)}
        />
        <input
            type="date"
            className="h-10 w-[180px] border border-input rounded-md px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="End Date"
            value={config.endDate}
            onChange={(e) => config.setEndDate?.(e.target.value)}
        />
    </>
);


<<<<<<< HEAD
const componentsRegistry = (config:ComponentsConfig):ComponentRegistry => ({
  utilisateurs: () => (
    <Button
      className="flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white bg-gray-800 border border-gray-600 shadow-md hover:bg-gray-700"
      onClick={()=>{config.router?.replace('/add-user')}}
    >
      <Image src={icons.Plus} alt="Add User" width={20} height={20} />
      Ajouter utilisateurs
    </Button>
  ),
  produits: ()=> renderDropdownAndSelect(config),
  families: ()=> renderDropdownAndSelect(config),
  listePrix:()=> renderDropdownAndSelect(config),
  entrepotsProduits:() => renderDropdownAndSelect(config),
=======
const componentsRegistry = (config: ComponentsConfig): ComponentRegistry => ({
    /* Admin */
    utilisateurs: () => (
        <Button
            className="flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white bg-gray-800 border border-gray-600 shadow-md hover:bg-gray-700"
            onClick={() => {
                config.router?.replace('/add-user')
            }}
        >
            <Image src={icons.Plus} alt="Add User" width={20} height={20}/>
            Ajouter utilisateurs
        </Button>
    ),
>>>>>>> e87421b8cd015ea1eb0a9a136b221c1a1d1493ee

    /* Clients */

    listeClients: () => {
        return (
            <>
                {selectClientType(config)}
                {selectSalesUser(config)}
                {renderDropdown(config)}
            </>
        )
    },
    ClientProspect: () => {
        return (
            <>
                {selectClientType(config)}
                {selectSalesUser(config)}
                {renderDropdown(config)}
            </>
        )
    },

    /* Produits */

    produits: () => {
        return (
            <>
                {selectCategory(config)}
                {renderDropdown(config)}
            </>
        )
    },

    /* Ventes */

    'bons-commande': () => {
        return (
            <>
                {selectSalesUser(config)}
                {renderDropdown(config)}
                {renderDateRange(config)}
            </>
        )
    },

/* Gestion RH */

    PageSalarie: () => renderDateRange(config),
    avanceSalaire: () => renderDateRange(config),
    Pointage: () => renderDateRange(config),
});

export default componentsRegistry;
