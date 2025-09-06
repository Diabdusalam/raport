import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { TClass } from "./_components/table-class";

export function useClassViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataClasses = {
    data: [
      {
        id: "1",
        name: "X-MIPA 1",
      },
      {
        id: "2",
        name: "X-MIPA 2",
      },
      {
        id: "3",
        name: "X-MIPA 3",
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
      classes: dataClasses,
    },
    onSubmit: (values) => {
      console.log("submit values", values);
    },
  });
  useEffect(() => {
    setValues({ classes: dataClasses });
  }, []);
  return {
    dataClasses,
    values,
    setValues,
    handleSubmit,
    setFieldValue,
    isModalOpen,
    setIsModalOpen,
  };
}
