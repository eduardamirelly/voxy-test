import * as Select from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';
import { SelectContent, SelectItem, SelectTrigger } from './styles';

interface OptionProp {
  text: string;
  value: string;
}

interface SelectBoxProps {
  options: OptionProp[];
  placeholder: string;
}

export function SelectBox({ options, placeholder }: SelectBoxProps) {
  return (
    <Select.Root>
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
              {options.map((option) => (
                <SelectItem value={option.value}>
                  <Select.ItemText>{option.text}</Select.ItemText>
                </SelectItem>
              ))}
            </Select.Group>
            
          </Select.Viewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  )
}