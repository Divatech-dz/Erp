import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TabsProps } from '@/types';

function Tabs({ tabName, itemName }: TabsProps) {
  return (
    <Select>
      <SelectTrigger
        className="relative w-[250px] cursor-default rounded-xl bg-black-3 p-4 text-left  focus:outline-none focus-visible:border-[#76ABAE] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 
      focus-visible:ring-offset-2  sm:text-sm text-gray-1 font-semibold "
      >
        <SelectValue placeholder={tabName} />
      </SelectTrigger>
      <SelectContent>
        {itemName?.map((value, index) => (
          <SelectItem value={value} key={index}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default Tabs;
