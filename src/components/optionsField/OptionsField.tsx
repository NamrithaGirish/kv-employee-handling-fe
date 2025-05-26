import "./OptionsField.css"
export const OptionsField =({label,options,classname}:{label:string,options:string[],classname:string})=>{
    return(
        <div className="form-options">
            <label>{label}</label>
            <select className={classname}>
            <option disabled selected>
                    Choose {label}
                </option>
                {
                    options.map((option)=>{
                        return(
                            <option>
                                {option}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}