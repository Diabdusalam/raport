import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { TTeacher } from "./_components/table-class";

export function useTeachersViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataTeachers = {
    data: [
      {
        id: "1",
        name: "Ahmed",
        nik: "12345",
      },
      {
        id: "2",
        name: "Supri",
        nik: "12346",
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

  const { values, setValues, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      teachers: dataTeachers,
    },
    onSubmit: (values) => {
      console.log("submit values", values);
    },
  });
  useEffect(() => {
    setValues({ teachers: dataTeachers });
  }, []);
  return {
    dataTeachers,
    values,
    setValues,
    handleSubmit,
    setFieldValue,
    isModalOpen,
    setIsModalOpen,
  };
}
