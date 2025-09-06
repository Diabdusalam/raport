import { useFormik } from "formik";
import { useEffect, useState } from "react";

export function useAcademicYearViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataAcademicYear = {
    data: [
      {
        id: "13f",
        academicYears: "2022/2023",
        semester: 1,
        status: "active",
      },
      {
        id: "2f3",
        academicYears: "2022/2023",
        semester: 2,
        status: "active",
      },
      {
        id: "3f3f",
        academicYears: "2022/2023",
        semester: 1,
        status: "active",
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
      academicYears: dataAcademicYear,
    },
    onSubmit: (values) => {
      console.log("submit values", values);
    },
  });
  useEffect(() => {
    setValues({ academicYears: dataAcademicYear });
  }, []);
  return {
    dataAcademicYear,
    values,
    setValues,
    handleSubmit,
    setFieldValue,
    isModalOpen,
    setIsModalOpen,
  };
}
