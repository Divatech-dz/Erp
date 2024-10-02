import { Switch } from './ui/switch';
import { Label } from './ui/label';

const SwitchInfo = ({
  checked,
  switchState,
  id,
}: {
  checked: boolean;
  switchState: VoidFunction;
  id: string;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} checked={checked} onClick={switchState} />
      <Label htmlFor={id} className="text-gray-700 font-medium cursor-pointer">
        {checked ? 'Quantité disponible' : 'Quantité en vente'}
      </Label>
    </div>
  );
};

export default SwitchInfo;
