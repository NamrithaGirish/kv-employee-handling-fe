import { Button } from "../button/Button";
import icon from "../../assets/icon.svg";
import { format } from "date-fns";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

import "./DisplayCard.css";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { PopupComponent } from "../popup/Popup";
import { useState } from "react";
interface display {
  title: string[];
  data: {
    id: number;
    name: string;
    employeeId: string;
    joiningDate: string;
    role: string;
    status: string;
    experience: number;
  }[];
  // statusFilter:string
}
export const DisplayCard = ({ title, data }: display) => {
  const navigate = useNavigate();
  const navigateToEdit = (e:React.MouseEvent<HTMLButtonElement>,id: number) => {
    e.stopPropagation()
    navigate(`/employee/edit/${id}`);
    
  };
  const [open, setOpen] = useState(false);
  
  const deleteEmployeeAlert = () => {
    setOpen(false);
    // alert("Sure?");
  };
  const navigateToEmployeeDetails = (id:number) =>{
    navigate(`/employee/${id}`)
  }
  return (
    <div className="display-container">
      <table className="display-table">
        <tr>
          {title.map((content) => {
            return <th>{content}</th>;
          })}
        </tr>
        {data.map((content) => {
          return (
            <tr onClick={()=>navigateToEmployeeDetails(content.id)}>
              <td>{content.name}</td>
              <td>{content.employeeId}</td>
              <td>
                {/* {format(content.joiningDate,"dd-mm-yyyy")} */}
                {new Date(content.joiningDate).toLocaleDateString([], {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td>{content.role}</td>
              <td >
                <div className={`status-cell-${content.status}`}>
                    {content.status}
                </div>

                </td>
              <td>{content.experience}</td>
              {/* {
                                    Object.values(content).map((value)=>{
                                        return(
                                            <td>
                                                {value}
                                            </td>
                                        )
                                    })
                                } */}
              <td>
                <div className="action-emp">
                  <Popup
                   open={open}
                    modal
                  >
                        <PopupComponent
                          heading="Are you sure?"
                          text="Do you want to delete the Employee?"
                          yesFnCall={()=>deleteEmployeeAlert()}
                          noFnCall={()=>setOpen(false)}
                          />
                  </Popup>
                  <button className="delete-emp" onClick={(e:React.MouseEvent<HTMLButtonElement>) => {e.stopPropagation();setOpen(true)}}>
                        <FaRegTrashCan className="delete-icon" />

                        {/* <i className="fa fa-trash-o"></i> */}
                        {/* <img src={icon} /> */}
                        {/* <FontAwesomeIcon icon="fa-solid fa-trash" style={{color: "#e31616",}} /> */}
                      </button>
                  <button
                    className="edit-emp"
                    onClick={(e:React.MouseEvent<HTMLButtonElement>) => navigateToEdit(e,content.id)}
                  >
                    <MdOutlineModeEdit className="edit-icon" />

                    {/* <img src={icon} /> */}
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
