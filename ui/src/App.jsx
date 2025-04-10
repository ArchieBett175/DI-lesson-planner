import React from "react";
import axios from "axios";
import { useState } from "react";
import { API_URL } from "./utils";
import { useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);

      setTasks(data);
    } catch (err){
      console.log(err)
    }
  };

  useEffect(() => {
    fetchTasks()
  }, []);

  return (
    <>
      <h1 className="text-amber-200">Hello World</h1>
      {tasks.map((task) => console.log(task, task.id ))}
    </>
  );
};

export default App;
