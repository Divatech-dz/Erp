
import { Sheet,  SheetContent,  SheetHeader, SheetTitle } from "../ui/sheet";
import { FilterContent } from "./sheet-content";

interface ReusableSheetProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  contentType: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentProps?: Record<string, any>; 
}

export const ReusableSheet: React.FC<ReusableSheetProps> = ({ open, onClose, title,contentType }) => {
  const renderContent = () => {
    switch (contentType) {
      case "table":
        return <div>Table</div>;
      case "filter":
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
      </SheetContent>
    </Sheet>
  );
};

