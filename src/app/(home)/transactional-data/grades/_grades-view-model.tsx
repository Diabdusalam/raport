import { useFormik } from "formik";
import { TStudent } from "./_components/table-grades";
import { useEffect } from "react";

export function useGradesViewModel() {
  const dataStudents: TStudent[] = [
    {
      id: "1",
      studentId: "Ab123",
      name: "ABcde",
      Uts: 80,
      Uas: 90,
      UH: 90,
    },
    {
      id: "2",
      studentId: "A23",
      name: "Ahmad",
      Uts: 60,
      Uas: 90,
      UH: 90,
    },
    {
      id: "3",
      studentId: "A45",
      name: "supiah",
      Uts: 80,
      Uas: 90,
      UH: 90,
    },
  ];

  const { values, setValues, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      students: dataStudents,
    },
    onSubmit: (values) => {
      console.log("submit values", values);
    },
  });
  useEffect(() => {
    setValues({ students: dataStudents });
  }, []);
  return { dataStudents, values, setValues, handleSubmit, setFieldValue };
}
