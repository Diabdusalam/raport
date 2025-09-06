import { useFormik } from "formik";
import { useEffect } from "react";
import { TAttendance } from "./_components/table-attendance";

export function useAttendanceViewModel() {
  const dataAttendance: TAttendance[] = [
    {
      id: "1",
      studentId: "Ab123",
      name: "suyono",
      status: "Hadir",
      notes: "-",
    },
    {
      id: "2",
      studentId: "A23",
      name: "Ahmad",
      status: "Sakit",
      notes: "-",
    },
    {
      id: "3",
      studentId: "A45",
      name: "Mulyono",
      status: "Izin",
      notes: "Nikahan",
    },
  ];

  const { values, setValues, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      attendance: dataAttendance,
    },
    onSubmit: (values) => {
      console.log("submit values", values);
    },
  });
  useEffect(() => {
    setValues({ attendance: dataAttendance });
  }, []);
  return { dataAttendance, values, setValues, handleSubmit, setFieldValue };
}
