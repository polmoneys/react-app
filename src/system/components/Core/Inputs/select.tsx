import Group from "../Group";

type OptionValue = string | number;

type Option<T extends OptionValue> = {
  value: T;
  label: string;
};

type Props<T extends OptionValue> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder: string;
};

function Select<T extends OptionValue>(props: Props<T>) {
  const { options, value, onChange, placeholder } = props;

  const onChangeSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const { selectedIndex } = event.currentTarget;
    const selectedOption = options[selectedIndex];
    onChange(selectedOption.value);
  };

  return (
    <Group as="label" data-select="" gap={"0"}>
      <select value={value} onChange={onChangeSelect} required>
        <option value="" hidden>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Group>
  );
}

export default Select;
