import { NavLink } from "react-router-dom";

import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
export default function Header(){
  return <>
    <div className="logo">School</div>
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/teachers'>Teachers</NavLink>
      <NavLink to='/students'>Students</NavLink>
      <NavLink to='/class'>Class view</NavLink>
      <NavLink to='https://github.com/Anush79/SchoolManagement' target="_blank"><GitHubIcon/></NavLink>
      <NavLink to='https://replit.com/@AnushkaJaiswal7/StudentManagement#index.js'target="_blank"><StorageIcon/></NavLink>

    </nav>
  </>
}