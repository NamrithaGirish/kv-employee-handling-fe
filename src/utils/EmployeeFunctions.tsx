import store from "../store/store"

export const getDetailsOfEmployee = (employeeId:string|undefined)=>{
    const empList = store.getState().employees
    return empList.find((employee)=>employeeId===employee.employeeId)
}