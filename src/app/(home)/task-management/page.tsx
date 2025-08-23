"use client";

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { TaskManagementViewModel } from "./_task-management-view-model";
import { stat } from "fs";
import { twMerge } from "tailwind-merge";
import { Plus } from "lucide-react";

const TaskManagement = () => {
  const model = TaskManagementViewModel();
  const onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    const fromStatus = source.droppableId;
    const toStatus = destination.droppableId;

    const samePosition =
      fromStatus === toStatus && source.index === destination.index;

    if (samePosition) return;
    console.log(draggableId, toStatus, destination.index);
    model.updateTaskstatus(draggableId, toStatus, destination.index);
  };
  return (
    <section className="p-4  w-full ">
      <div className="w-full bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 rounded-2xl p-6 gap-6 h-full space-y-4">
        <div className="w-full justify-between flex items-center px-2">
          <div className="text-white text-2xl font-bold">
            Project : <span className="text-gray-400">Project Maintenance</span>
          </div>
          <div className="text-lg rounded-lg border-solid  bg-white/5  border border-white/10  py-2 px-5 my-5 text-white flex items-center gap-2 ">
            <Plus /> Add New Task
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-4">
            {" "}
            {model.statusTask.map((status) => (
              <Droppable droppableId={status.name} key={status.name}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex flex-col gap-4 p-4 rounded-2xl bg-white/5  border border-white/10 w-full"
                  >
                    <div
                      className={`inline-block mb-4 px-5 py-2 rounded-full text-white/95 font-semibold text-lg ${status.background} bg-clip-padding`}
                    >
                      {status.name}
                    </div>
                    <div className="flex flex-col gap-2 space-y-4">
                      {model.tasks
                        .filter((task) => task.status === status.name)
                        .map((task, index) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                className={twMerge(
                                  `relative rounded-xl p-4 backdrop-blur-md bg-gradient-to-br ${status.background} border border-white/10 shadow-lg  transition-transform duration-200`
                                )}
                              >
                                <div className="w-full font-semibold rounded-full overflow-hidden text-white">
                                  {task.title}
                                </div>
                                <div className="text-sm text-white/70">
                                  {task.description}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}{" "}
          </div>
        </DragDropContext>
      </div>
    </section>
  );
};

export default TaskManagement;
