// import React from 'react';
// import TrainPage from './TrainPage'; // Import the TrainPage component

// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to Book Train App</h1>
//       <TrainPage /> 
//     </div>
//   );
// };

// export default App;




import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTrainsPage from "./AllTrainsPage";
import SingleTrainPage from "./SingleTrainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTrainsPage />} />
        <Route path="/trains/:id" element={<SingleTrainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
