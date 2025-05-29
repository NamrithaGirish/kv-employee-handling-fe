import { format } from "date-fns"
import { Button } from "../button/Button"
import { InputBox } from "../inputBox/InputBox"
import { InputCombination } from "../inputCombination/InputCombination"
import { OptionsField } from "../optionsField/OptionsField"
import { useState } from "react"

interface FormParams{
    type:string,
    data?:{
        name:string,
        email:string,
        employeeId:string,
        joiningDate:string,
        role:string,
        status:string,
        experience:number,
        age:number,
        address:{
            houseNo:string,
            line1:string,
            line2:string
        },
        dept:{
            name?:string
        } |null

    }
}
// useEffect(()=>{

// })
export const EmployeeDetailsForm = ({type,data}:FormParams)=>{
    const [values,setValues] = useState({});
    const checkIsEdit =()=>{
        return type=="edit";
    }
    return(
        <div className="employee-creation-details">
                            <InputCombination name="emp_name" placeholder="Employee Name" type="text" value={checkIsEdit()?data?.name:""} />
                            <InputCombination name="email"
                                    placeholder="Email"
                                    type="text" 
                                    value={checkIsEdit()?data?.email:""}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"email":e.target.value})}}/>
                            <InputCombination name="age"
                                    placeholder="Age"
                                    type="number" 
                                    value={checkIsEdit()?data?.age.toString():""}/>
                            
                            <InputCombination name="joining_date"
                                    placeholder="Joining Date"
                                    type="date" value={checkIsEdit()?"01/02/2025":""}/>
                            <OptionsField label="Status"
                                        classname="status"
                                        options={["ACTIVE","INACTIVE","PROBATION"]}
                                        value={checkIsEdit()?data?.status:"Status"}/>
                            <OptionsField label="Role"
                                        classname="role"
                                        options={["HR","DEVELOPER","UI","UX"]}
                                        value={checkIsEdit()?data?.role:"Role"}/>
                            
                            <InputCombination name="address" value={checkIsEdit()?data?.address.houseNo:""} placeholder="Address" type="text" />
                            <OptionsField label="Department"
                                        classname="department"
                                        options={["HR","DEVELOPER","TESTER"]}
                                        value={checkIsEdit()?(data?.dept!==null?data?.dept.name:""):"Department"}/>
                            <InputCombination name="experience"
                                    placeholder="Experience"
                                    type="number"
                                    value={checkIsEdit()?data?.experience.toString():""} />
        
                            
                            <div className="AddressLine">
                                <InputBox classname="line_1" text="Line 1" onchange={print} value={checkIsEdit()?data?.address.line1:""}/>
                                <InputBox classname="line_2" text="Line 2" onchange={print} value={checkIsEdit()?data?.address.line2:""}/>
                            </div>
                            <InputCombination name="emp_id"
                                    placeholder="Employee ID"
                                    type="text" disabled={checkIsEdit()?true:false} value={checkIsEdit()?data?.employeeId:""} />
                            <div className="simpleDiv">
                                
                            </div>
                            <div className="button-holder">
                                <Button text={"Save"} classname="create" functionName={print} />
                                <Button text="Cancel" classname="cancel" functionName={print} />
                            </div>
                            
                            
                        </div>
    )
}