import * as Select from '@radix-ui/react-select';
import { CaretDown, Check } from 'phosphor-react';
import { SelectContent, SelectItem, SelectTrigger } from './styles';

interface OptionProp {
  text: string;
  value: string;
}

interface SelectBoxProps {
  options: OptionProp[];
  placeholder: string;
  onValueChange: (event: string) => void;
  defaultValue?: string;
  isRequired?: boolean;
}

export function SelectBox({ options, placeholder, onValueChange, defaultValue, isRequired = false }: SelectBoxProps) {
  return (
    <Select.Root onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectTrigger>
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <CaretDown size={24} />
        </Select.Icon>
      </SelectTrigger>

      <Select.Portal>
        <SelectContent align="center" side="bottom">
          <Select.Viewport>

            <Select.Group>
              {!isRequired && (
                <SelectItem value="0">
                  <Select.ItemText>All</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check size={20} />
                  </Select.ItemIndicator>
                </SelectItem>
              )}
              {options.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  <Select.ItemText>{option.text}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check size={20} />
                  </Select.ItemIndicator>
                </SelectItem>
              ))}
            </Select.Group>
            
          </Select.Viewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  )
}