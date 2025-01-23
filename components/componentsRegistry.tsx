import {ComponentRegistry, ComponentsConfig} from '@/types';
import {icons} from '@/constants/icons';

import Image from 'next/image';

import React from 'react';

import {Dropdown} from './table-components';

import {Button} from './ui/button';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from './ui/select';

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
    </Select>
);


const selectCaisse = (config: ComponentsConfig) => (
  <Select
      onValueChange={(value: any) => {
          config.setCaisse?.(Number(value));
          config.setCurrentPage?.(1);
      }}
  >
    <SelectTrigger className="w-[180px] h-10">
      <SelectValue placeholder="Filtrer par caisse" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectGroup>
        <SelectLabel>Caisse</SelectLabel>
        <SelectItem value=" ">TOUTES</SelectItem>
        {config.caisses?.map((caisse) => (
          <SelectItem key={caisse.id} value={caisse.id}>
            {caisse.caisse?.toUpperCase()}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);


const selectUsers = (config: ComponentsConfig) => (
  <Select
      onValueChange={(value: any) => {
          config.setUtilisateur?.(Number(value));
          config.setCurrentPage?.(1);
      }}
  >
    <SelectTrigger className="w-[180px] h-10">
      <SelectValue placeholder="Filtrer par utilisateurs" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectGroup>
        <SelectLabel>Utilisateurs</SelectLabel>
        <SelectItem value=" ">TOUS</SelectItem>
        {config.utilisateurs?.map((utilisateur) => (
          <SelectItem key={utilisateur.id} value={utilisateur.id}>
            {utilisateur.utilisateur?.toUpperCase()}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);



const selectFournisseur = (config: ComponentsConfig) => (
  <Select
      onValueChange={(value: any) => {
          config.setFournisseur?.(Number(value));
          config.setCurrentPage?.(1);
      }}
  >
    <SelectTrigger className="w-[180px] h-10">
      <SelectValue placeholder="Filtrer par fournisseur" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectGroup>
        <SelectLabel>Fournisseurs</SelectLabel>
        <SelectItem value="0">TOUTES</SelectItem>
        {config.fournisseurs?.map((fr:any) => (
          <SelectItem key={fr.id} value={fr.id}>
            {fr.fournisseur?.toUpperCase()}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

const selectEntrepot = (config: ComponentsConfig) => (
  <Select
      onValueChange={(value: any) => {
          config.setEntrepot?.(Number(value));
          console.log(value);
          
          config.setCurrentPage?.(1);
      }}
  >
    <SelectTrigger className="w-[180px] h-10">
      <SelectValue placeholder="Filtrer par entrepot" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectGroup>
        <SelectLabel>Entrepots</SelectLabel>
        <SelectItem value="0">TOUS</SelectItem>
        {config.entrepots?.map((et:any) => (
          <SelectItem key={et.id} value={et.id}>
            {et.entrepot?.toUpperCase()}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);


const selectEntrepotDepart = (config: ComponentsConfig) => (
  <Select
      onValueChange={(value: any) => {
          config.setEntrepotDepart?.(Number(value));
          console.log(value);
          
          config.setCurrentPage?.(1);
      }}
  >
    <SelectTrigger className="w-[180px] h-10">
      <SelectValue placeholder="Entrepot Départ" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectGroup>
        <SelectLabel>Entrepot Départ</SelectLabel>
        <SelectItem value="0">TOUS</SelectItem>
        {config.entrepots?.map((et:any) => (
          <SelectItem key={et.id} value={et.id}>
            {et.entrepot?.toUpperCase()}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);


const selectEntrepotArrive = (config: ComponentsConfig) => (
  <Select
      onValueChange={(value: any) => {
          config.setEntrepotArrive?.(Number(value));
          console.log(value);
          
          config.setCurrentPage?.(1);
      }}
  >
    <SelectTrigger className="w-[180px] h-10">
      <SelectValue placeholder="Entrepot Arrivé" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectGroup>
        <SelectLabel>Entrepot Arrivé</SelectLabel>
        <SelectItem value="0">TOUS</SelectItem>
        {config.entrepots?.map((et:any) => (
          <SelectItem key={et.id} value={et.id}>
            {et.entrepot?.toUpperCase()}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);




const selectDecaleJuste = (config: ComponentsConfig) => (
  <Select
      onValueChange={(value: any) => {
          
          config.setDecaleJuste?.(value);
      }}
  >
    <SelectTrigger className="w-[180px] h-10">
      <SelectValue placeholder="Décalé/Juste"/>
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectGroup>
        <SelectLabel>Décalé/Juste</SelectLabel>
              
          <SelectItem  value={"decaleJuste"}>
             Décalé/Juste 
          </SelectItem>
       
          <SelectItem  value={"decale"}>
             Décalé
          </SelectItem>

          <SelectItem  value={"juste"}>
             Juste
          </SelectItem>

      </SelectGroup>
    </SelectContent>
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
  produits: ()=>
  {
    return (
      <>
        {renderDropdown(config)}
        {selectCategory(config)}
      </>
    )
  },
  families: ()=>
    {
      return (
        <>
          {renderDropdown(config)}
          {selectCategory(config)}
        </>
      )
    },
  listePrix:()=> 
    {
      return (
        <>
          {renderDropdown(config)}
          {selectCategory(config)}
        </>
      )
    },

    etatStock: () => {
      return (
          <>
              {selectCategory(config)}
              {renderDropdown(config)}
              {renderDateRange(config)}
          </>
      )
  },

  entrepotsProduits:() => {
    return (
      <>
        {renderDropdown(config)}
        {selectCategory(config)}
      </>
    )
  },

  verificationStock:() => {
    return (
      <>
        {renderDropdown(config)}
        {selectFournisseur(config)}
        {selectEntrepot(config)}
        {selectDecaleJuste(config)}
      </>
    )
  },

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


    /* Stock*/

    bonsEntree: () => {
      return (
        <>
            {selectEntrepot(config)}
            {selectFournisseur(config)}
            {renderDropdown(config)}
            {renderDateRange(config)}
        </>
    )
    },

    bonsTransfert: () => { 
      return(
        <>
            {selectEntrepotDepart(config)}
            {selectEntrepotArrive(config)}
            {renderDropdown(config)}
            {renderDateRange(config)}
        
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
    Facture: () => {
        return (
            <>
                {renderDropdown(config)}
                {renderDateRange(config)}
            </>
        )
    },
    bonsRetourVente: () => {
        return (
            <>
                {selectSalesUser(config)}
                {renderDropdown(config)}
                {renderDateRange(config)}
            </>
        )
    },
    bonsDevis: () => {
        return (
            <>
                {selectSalesUser(config)}
                {renderDropdown(config)}
            </>
        )
    },

    /* Comptoir*/

    cloture:()=> 
      {
        return (
          <>
            {renderDropdown(config)}
            {selectCaisse(config)}
            {selectUsers(config)}
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
