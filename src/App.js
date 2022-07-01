import React, { useState } from "react";

import Tasks from "./components/Tasks";
import "./App.css"; // Importando o CSS

const App = () => {
  // const tasks = 'Hello world!'
  const [tasks, settasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: 2,
      title: 'Estudar Redes',
      completed: true,
    },
    
  ]); //State 

  return (
  
  <>
      <div className="container">
        <Tasks tasks={tasks}/>
      </div>
  </>

  );
};

export default App;