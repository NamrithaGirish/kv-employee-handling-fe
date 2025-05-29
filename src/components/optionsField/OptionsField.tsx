import type React from "react";
import "./OptionsField.css";
interface SelectFieldParams {
  label: string;
  options: string[];
  classname: string;
  noDisabledField?:boolean,
  onChange?:(e:React.ChangeEvent<HTMLSelectElement>)=>void,
  value?:string
}
export const OptionsField = ({ label, options, classname ,noDisabledField,onChange,value}: SelectFieldParams) => {
  return (
    <div className="form-options">
      <label>{label}</label>
      <select className={classname} onChange={onChange} defaultValue={value}>
        {!noDisabledField && <option disabled selected>
          {label}
        </option>}
        {options.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
};
