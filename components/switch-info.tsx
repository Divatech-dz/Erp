import { Switch } from './ui/switch';
import { Label } from './ui/label';

const SwitchInfo = ({
  checked,
  switchState,
}: {
  checked: boolean;
  switchState: VoidFunction;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="quantity-mode"
        className="switch-side-bar"
        checked={checked}
        onClick={switchState}
      />
      <Label
        htmlFor="quantity-mode"
        className="text-gray-700 font-medium cursor-pointer"
      >
        {checked ? 'Quantité disponible' : 'Quantité en vente'}
      </Label>
    </div>
  );
};

export default SwitchInfo;
