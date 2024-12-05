import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { FilterContent } from "./sheet-content/filter-content";



interface ReusableSheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  contentType: string; 
}



export const SheetDialog:React.FC<ReusableSheetProps>=({ open, onClose, title, contentType}) =>{
  const renderContent = () => {
    
    switch (contentType) {
      
      case "Table":
        return <div>Table</div>;
      case "Filter":
        return <FilterContent/>;
     
      default:
        return <div>No content available</div>;
    }
  };
  return (
    <Sheet open={open} onOpenChange={onClose}>
    <SheetContent className="bg-gray-25 min-w-[600px]">
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col items-center w-full min-h-[80%] justify-center p-4">
        {renderContent()}
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="button">Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
  
  )
}
