import { useFormik } from "formik";
import { use, useEffect, useState } from "react";

export function StudentsViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  interface DataStudent {
    id: number;
    name: string;
    nis: string;
  }
  const response = {
    data: [
      {
        id: 1,
        name: "Jo Doe",
        nis: "12345",
      },
      {
        id: 2,
        name: "han Abad",
        nis: "12343",
      },
      {
        id: 3,
        name: "boyd Han",
        nis: "kq02e",
      },
      {
        id: 4,
        name: "daddy Doe",
        nis: "12345",
      },
    ],
    pagination: {
      page: 1,
      limit: 10,
      offset: 0,
      totalRows: 20,
      currentRowsCount: 3,
      totalPages: 10,
      nextPage: 2,
      prevPage: 4,
    },
  };
  const [selectedId, setSelectedId] = useState(0);
  const { values, setValues, errors, registerField } = useFormik<DataStudent>({
    initialValues: {
      id: 0,
      name: "",
      nis: "",
    },
    enableReinitialize: true,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: DataStudent) {
    try {
      if (values.id === 0) {
        console.log("Create", values);
        // await createStudent(values);
      } else {
        console.log("Update", values);
        // await updateStudent(values);
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  }
  useEffect(() => {
    const selectedData = response.data.find((item) => item.id === selectedId);
    if (selectedData) {
      setValues(selectedData);
    }
  }, [selectedId !== 0]);

  return {
    response,
    selectedId,
    isModalOpen,
    setIsModalOpen,
    setSelectedId,
    setValues,
  };
}
