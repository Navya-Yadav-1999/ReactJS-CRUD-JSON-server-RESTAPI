// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Emplisting from './EmployeeListing';
// import Empcreate from './EmployeeCreate';
// import Empdetails from './EmployeeDetails';
// import Empedit from './EmployeeEdit';

// function App() {
//   return (
//     <div className="App">
//       <h1>React JS CRUD Operations</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Emplisting />}></Route>
//           <Route path='/employeedetails' element={<EmployeeCreate />}></Route>
//           <Route path='/employeedetails/details/:empid' element={<EmployeeDetails />}></Route>
//           <Route path='/employeedetails/edit/:empid' element={<EmployeeEdit />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employeedetails/create' element={<EmpCreate />}></Route>
          <Route path='/employeedetails/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employeedetails/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
