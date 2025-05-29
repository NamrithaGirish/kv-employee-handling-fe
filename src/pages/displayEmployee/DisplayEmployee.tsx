import { useNavigate, useParams } from "react-router-dom"
import { MainContent } from "../../components/mainContent/MainContent"
import { Sidebar } from "../../components/sidebar/Sidebar"
import "./DisplayEmployee.css"
import { Layout } from "../../components/layout/Layout"
import { Header } from "../../components/header/Header"
import { DisplayDiv } from "../../components/displayDiv/DisplayDiv"
import { format } from 'date-fns';
import { MdOutlineModeEdit } from "react-icons/md"
function camelCaseToNormal(camelCaseString:string) {
  const result = camelCaseString.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}
const formatAddress = ( address: { houseNo: string; line1: string; line2: string } ) => {
    return address.houseNo + ",\n" + address.line1 + ",\n" + address.line2;
}
export const DisplayEmployee=()=>{
    const {id} = useParams();
    const data = {
    "id": 71,
    "createdAt": "2025-05-23T05:22:11.080Z",
    "updatedAt": "2025-05-23T05:22:11.080Z",
    "deletedAt": null,
    "email": "testname7@mail.com",
    "age": 23,
    "name": "test name2",
    "password": "$2b$10$ALm4re8edh51gjLA.r1Vj.9s55rtJf79Vg0/8.WRlkgRxQ2r9zgMG",
    "role": "HR",
    "joiningDate": "2025-05-23T14:00:00.000Z",
    "experience": 0,
    "status": "INACTIVE",
    "employeeId": "E2",
    "address": {
        "id": 48,
        "createdAt": "2025-05-23T05:22:11.080Z",
        "updatedAt": "2025-05-23T05:22:11.080Z",
        "deletedAt": null,
        "pincode": 120344,
        "line1": "Line 1",
        "line2": "Line2",
        "houseNo": "house no"
    },
    "dept": null
}
    const navigate = useNavigate();
    const navigateToEdit= (id:number)=>{
        navigate(`/employee/edit/${id}`)
    }
    
    return(
        <>
           {/* <Layout> */}
            <Header title="Employee List" >
                <div className="edit-option">
                <button className="edit-button-in-view" onClick={()=>navigateToEdit(data.id)}>
                    <MdOutlineModeEdit className="edit-icon-in-view"/>
                    Edit
                </button>
                
                
            </div>
            </Header>
            
                <div className="employee-details">
                        {/* {
                            Object.entries(data).map(([key,value])=>{
                                return(
                                    <div className="emp-data-holder">
                                        <div className="emp-data-key">{camelCaseToNormal(key)}</div>
                                        <div className="emp-data-value">{value}</div>
                                    </div>
                                )
                            })
                        } */}
                        <DisplayDiv title="Employee Name" value={data.name} />
                        <DisplayDiv title="E-Mail" value={data.email} />
                        <DisplayDiv title="Joining Date" value={format(data.joiningDate,"dd-mm-yyyy")} />
                        <DisplayDiv title="Age" value={data.age.toString()} />
                        <hr className="solid-line"/>

                        <DisplayDiv title="Role" value={data.role} />
                        <DisplayDiv title="Status" value={data.status} />
                        <DisplayDiv title="Experience" value={data.experience.toString()+"Yrs"} />
                        <DisplayDiv title="Address" value={formatAddress(data.address)} />
                        <hr className="solid-line"/>
                        <DisplayDiv title="Employee ID" value={data.employeeId} />

                </div>
           {/* </Layout> */}
                
           
        </>
    )
}