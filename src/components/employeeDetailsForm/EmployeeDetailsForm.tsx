// import { format } from "date-fns"
import { Button } from "../button/Button"
import { InputBox } from "../inputBox/InputBox"
import { InputCombination } from "../inputCombination/InputCombination"
import { OptionsField } from "../optionsField/OptionsField"
import { useEffect, useState } from "react"

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

export const EmployeeDetailsForm = ({type,data}:FormParams)=>{
    const [values,setValues] = useState({});
    const checkIsEdit =()=>{
        return type=="edit";
    }
    const formatDate = (date:string|undefined)=>{
        const formatedDate = new Date(date?date:"");
        return `${formatedDate.getFullYear()}-0${formatedDate.getMonth()}-${formatedDate.getDate()}`
    }
    useEffect(()=>{
        console.log(values)
        // console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
},[values])
    return(
        <div className="employee-creation-details">
                            <InputCombination name="emp_name" placeholder="Employee Name" type="text" value={checkIsEdit()?data?.name:""} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"name":e.target.value})}}/>
                            <InputCombination name="email"
                                    placeholder="Email"
                                    type="text" 
                                    value={checkIsEdit()?data?.email:""}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"email":e.target.value})}}/>
                            <InputCombination name="age"
                                    placeholder="Age"
                                    type="number" 
                                    value={checkIsEdit()?data?.age.toString():""}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"age":e.target.value})}}/>
                            
                            <InputCombination name="joining_date"
                                    placeholder="Joining Date"
                                    type="date" value={checkIsEdit()?formatDate(data?.joiningDate):""}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"joiningDate":e.target.value})}}/>
                            <OptionsField label="Status"
                                        classname="status"
                                        options={["ACTIVE","INACTIVE","PROBATION"]}
                                        value={checkIsEdit()?data?.status:"Status"}
                                        onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{setValues({...values,"status":e.target.value})}}/>
                            <OptionsField label="Role"
                                        classname="role"
                                        options={["HR","DEVELOPER","UI","UX"]}
                                        value={checkIsEdit()?data?.role:"Role"}
                                        onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{setValues({...values,"role":e.target.value})}}/>
                            
                            <InputCombination 
                                    name="address" 
                                    value={checkIsEdit()?data?.address.houseNo:""} 
                                    placeholder="Address" 
                                    type="text" 
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"houseNo":e.target.value})}} />
                            <OptionsField label="Department"
                                        classname="department"
                                        options={["HR","DEVELOPER","TESTER"]}
                                        value={checkIsEdit()?(data?.dept!==null?data?.dept.name:""):"Department"}
                                        onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{setValues({...values,"dept":e.target.value})}}/>
                            <InputCombination name="experience"
                                    placeholder="Experience"
                                    type="number"
                                    value={checkIsEdit()?data?.experience.toString():""} 
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"experience":e.target.value})}}/>
        
                            
                            <div className="AddressLine">
                                <InputBox classname="line_1"
                                     text="Line 1" 
                                     defaultValue={checkIsEdit()?data?.address.line1:""}
                                     onchange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"line1":e.target.value})}}/>
                                <InputBox classname="line_2" text="Line 2" defaultValue={checkIsEdit()?data?.address.line2:""}
                                onchange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"line2":e.target.value})}}/>
                            </div>
                            <InputCombination name="emp_id"
                                    placeholder="Employee ID"
                                    type="text" disabled={checkIsEdit()?true:false} value={checkIsEdit()?data?.employeeId:""} 
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"employeeID":e.target.value})}}/>
                            {
                                !checkIsEdit()? <InputCombination name="password"
                                    placeholder="Password"
                                    type="password" 
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValues({...values,"password":e.target.value})}}/>:<div className="simpleDiv"></div>
                            
                            }
                            <div className="button-holder">
                                <Button text={"Save"} classname="create" functionName={print} />
                                <Button text="Cancel" classname="cancel" functionName={print} />
                            </div>
                            
                            
                        </div>
    )
}