"use client";
import { useState } from "react";

export function TaskManagementViewModel() {
  const statusTask = [
    {
      name: "To Do",
      background: "from-blue-500/30 via-blue-400/20 to-blue-300/10",
    },
    {
      name: "In Progress",
      background: "from-amber-500/30 via-orange-400/20 to-orange-300/10",
    },
    {
      name: "Done",
      background: "from-emerald-500/30 via-teal-400/20 to-teal-300/10",
    },
    {
      name: "Approved",
      background: "from-rose-500/30 via-rose-400/20 to-rose-300/10",
    },
  ];

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Task 1 description",
      status: "To Do",
    },
    {
      id: 2,
      title: "Task 2",
      description:
        "Task 2 description Task 2 descriptionTask 2 descriptionTask 2 descriptionTask 2 description",
      status: "To Do",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Task 3 description",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Task 4",
      description: "Task 4 description",
      status: "Done",
    },
  ]);
  const updateTaskstatus = (
    taskId: number | string,
    newStatus: string,
    newIndex: number
  ) => {
    setTasks((prevTasks) => {
      const movingTask = prevTasks.find(
        (task) => task.id.toString() === taskId
      );
      if (!movingTask) return prevTasks;

      const filteredTasks = prevTasks.filter(
        (task) => task.id.toString() !== taskId
      );

      const updatedTask = { ...movingTask, status: newStatus };

      const tasksInNewStatus = filteredTasks.filter(
        (t) => t.status === newStatus
      );
      const tasksNotInNewStatus = filteredTasks.filter(
        (t) => t.status !== newStatus
      );

      tasksInNewStatus.splice(newIndex, 0, updatedTask);

      return [...tasksNotInNewStatus, ...tasksInNewStatus];
    });
  };
  return { statusTask, tasks, updateTaskstatus, setTasks };
}
