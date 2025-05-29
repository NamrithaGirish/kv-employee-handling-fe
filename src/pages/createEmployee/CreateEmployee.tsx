// import { Content } from "../../components/content/Content"
import { useState } from "react"
import { Button } from "../../components/button/Button"
import { Header } from "../../components/header/Header"
import { InputBox } from "../../components/inputBox/InputBox"
import { InputCombination } from "../../components/inputCombination/InputCombination"
// import { InputCombination } from "../../components/inputCombination/InputCombination"
import { MainContent } from "../../components/mainContent/MainContent"
import { OptionsField } from "../../components/optionsField/OptionsField"
import { Sidebar } from "../../components/sidebar/Sidebar"
import "./CreateEmployee.css"
import { Layout } from "../../components/layout/Layout"
import { EmployeeDetailsForm } from "../../components/employeeDetailsForm/EmployeeDetailsForm"
const print = ()=>{
    console.log("Hello");
}
export const CreateEmployee = ()=>{
    // const incrementCounter = ()=>{
        
    //     setCounter((counter)=>counter+1);
    //     let newcounter = counter+1;
    //     console.log(newcounter);
    //     if (newcounter==0){
    //         setMessage("");
    //     }
        
    // }
    // const decrementCounter = ()=>{

    //     let newcounter = counter-1;
    //     setCounter(counter-1);
    //     console.log(newcounter);
    //     if (newcounter<0){
    //         setMessage("Negetive Value!!!!");
    //     }
        
    // }
    return (
        <>
            {/* <Layout> */}
                <Header title="Create Employee"/>
                <EmployeeDetailsForm type="create" />
                

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
            {/* </Layout> */}
        </>
    )
}