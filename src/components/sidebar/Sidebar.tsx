import "./Sidebar.css"
export const Sidebar = ()=>{
    return (
    <div className="side-bar">
            <header className="logo">
                  <img id="kv-logo-img" src="./src/assets/kv-logo.png"/> 
            </header>
            <nav className="nav-bar">   
                <ul className="emp-list">
                   <li> 
                    <img src="./src/assets/icon.svg" />
                   
                    Employee List</li>
                </ul>
            </nav>
    </div>
    )
}