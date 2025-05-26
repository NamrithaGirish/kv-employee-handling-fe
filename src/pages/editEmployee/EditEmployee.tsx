// import { Content } from "../../components/content/Content"
import { Button } from "../../components/button/Button"
import { Header } from "../../components/header/Header"
import { InputBox } from "../../components/inputBox/InputBox"
import { InputCombination } from "../../components/inputCombination/InputCombination"
// import { InputCombination } from "../../components/inputCombination/InputCombination"
import { MainContent } from "../../components/mainContent/MainContent"
import { OptionsField } from "../../components/optionsField/OptionsField"
import { Sidebar } from "../../components/sidebar/Sidebar"
import "./EditEmployee.css"



export const EditEmployee = ()=>{
    return (
        <>
            <Sidebar />
            <MainContent>
                <Header title="Edit Employee"/>
                <div className="content-section">

                <div className="employee-edit-details">
                    <InputCombination name="emp_name" placeholder="Employee Name" type="text" />
                    <OptionsField label="Department"
                                classname="department"
                                options={["HR","DEVELOPER","TESTER"]}/>
                    
                    <InputCombination name="experience"
                            placeholder="Experience"
                            type="number" />
                    <InputCombination name="joining_date"
                            placeholder="Joining Date"
                            type="date" />
                    <OptionsField label="Status"
                                classname="status"
                                options={["ACTIVE","INACTIVE","PROBATION"] }/>
                    <OptionsField label="Role"
                                classname="role"
                                options={["HR","DEVELOPER","UI","UX"]}/>
                    <InputCombination name="Address" placeholder="House No" type="text" />
                    <InputCombination name="emp_id"
                            placeholder="Employee ID"
                            type="text" />
                    
                    
                    <div className="AddressLine">
                        <InputBox classname="line_1" text="Line 1" />
                        <InputBox classname="line_2" text="Line 2" />
                    </div>

                    
                </div>
                <div className="button-holder">
                        <Button text="Create" classname="create" functionName={print }/>
                        <Button text="Cancel" classname="cancel" functionName={print}/>
                </div>
                </div>

                
                

                {/* <Content inputFieldList={[
                    {
                        id_name="emp_name"
                        placeholder="Employee Name"
                        type="text"
                    }
                    {
                        id_name="emp_id"
                        placeholder="Employee ID"
                        type="text"
                    }
                    {
                        id_name="experience"
                        placeholder="Experience"
                        type="number"
                    }
                    {
                        id_name="joining_date"
                        placeholder="Joining Date"
                        type="date"
                    }
                ]} 
                optionsFieldList={
                    [
                        {
                            label="Status"
                            classname="status"
                            options=["ACTIVE""INACTIVE""PROBATION"]

                        }{
                            label="Role"
                            classname="role"
                            options=["HR""DEVELOPER""UI""UX"]

                        }

                    ]
                }/> */}
            </MainContent>
        </>
    )
}