'use client';

import Form from "@/components/Form";
import Form2 from "@/components/Form2";
import Tabs from "@/components/Tabs";
import TaskCard, { ITaskCard } from "@/components/TaskCard";
import { useState } from "react";

const Homepage = () => {
  const [tasks, setTasks] = useState<ITaskCard[]>([]);

  const addTask = (task: ITaskCard) => {
    setTasks([...tasks, task]);
  }

  // useEffect(() => {
  //   console.log('Initial Mount');

  //   return () => {
  //     alert('Unmount');
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log('Updated');
  // })

  // useEffect(() => {
  //   console.log('Active Tab updated');
  // }, [activeTab])

  // useEffect(() => {
  //   console.log('Tasks updated');
  // }, [tasks])

  const tabsList = [
    {
      title: "Notifications",
    },
    {
      title: 'Todo',
      count: tasks.length,
    }
  ]

  return <div className="todo-card">
    <Tabs tabList={tabsList}>
      <div>Notifications</div>
      <div>
        <div className="todos-holder">
          {tasks.map((task, index) => <TaskCard key={index} {...task} />)}
        </div>
        <Form2 addForm={addTask} />
      </div>
    </Tabs>
  </div>
}

export default Homepage;