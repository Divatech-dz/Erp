
import Image from 'next/image';
import { Button } from './ui/button';
import { Dropdown } from './table-components';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { ComponentRegistry, ComponentsConfig} from '@/types';
import { icons } from '@/constants/icons';

const renderDropdownAndSelect = (config: ComponentsConfig) => (
  <>
    <Dropdown
      label="Columns"
      icon={icons.ArrowDown}
      columns={config.columnNames}
      handleColumnVisibilityChange={config.handleColumnVisibilityChange}
      visibleColumns={config.visibleColumns}
      classNameTrigger="flex h-10 w-full items-center  justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
    />
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
              {cat.category.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
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
  produits: ()=> renderDropdownAndSelect(config),

});

export default componentsRegistry;
