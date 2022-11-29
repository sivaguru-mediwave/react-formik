import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// All react-date picker props type details
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-datepicker/index.d.ts
interface DateProps<WithRange extends boolean | undefined = undefined> {
  label: string;
  name: string;
  id: string;
  selected?: Date | null | undefined;
  placeholderText: string;
  minDate?: Date | null | undefined;
  maxDate?: Date | null | undefined;
  dateFormat?: string | string[] | undefined;
  disabled?: boolean | undefined;
  errors?: any;
  onChange(
    date: WithRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null],
    event: React.SyntheticEvent<any> | undefined
  ): void;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
}

export const DatePickerInput: React.FC<DateProps> = (props) => {
  const {
    label,
    name,
    id,
    selected,
    placeholderText,
    minDate,
    maxDate,
    dateFormat,
    disabled,
    errors,
    onChange,
    onBlur,
  } = props;
  return (
    <div className="mb-1">
      <label htmlFor={name}>{label}</label>
      <DatePicker
        name={name}
        id={id}
        selected={selected}
        className="form-control"
        placeholderText={placeholderText}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat={dateFormat}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors ? <div className="">{errors}</div> : null}
    </div>
  );
};
