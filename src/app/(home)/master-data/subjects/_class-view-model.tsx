import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { TSubjects } from "./_components/table-class";

export function useSubjectsViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataSubjects = {
    data: [
      {
        id: "1",
        name: "MTK",
        subjetsCode: "Mat101",
        description: "Core math Subject",
      },
      {
        id: "2",
        name: "IPA",
        subjetsCode: "Mat101",
        description: "Core math Subject",
      },
      {
        id: "3",
        name: "IPS",
        subjetsCode: "Mat101",
        description: "Core math Subject",
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
      classes: dataSubjects,
    },
    onSubmit: (values) => {
      console.log("submit values", values);
    },
  });
  useEffect(() => {
    setValues({ classes: dataSubjects });
  }, []);
  return {
    dataSubjects,
    values,
    setValues,
    handleSubmit,
    setFieldValue,
    isModalOpen,
    setIsModalOpen,
  };
}
