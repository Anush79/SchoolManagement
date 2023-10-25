
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStudent } from "../features/students/studentSlice";
import { updateTeacherData } from "../features/teachers/teacherSlice";


export default function UpdateForm({type, data, onClose}){
  const [formData, setFormData] = useState(data);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(type === "student")
    dispatch(updateStudent({id:data._id, formData}));
  else dispatch(updateTeacherData({id:data._id, formData}))
    onClose()
  };
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  if(type === "student"){
    return     <form onSubmit={onSubmitHandler}>
    <input
      type="text"
      placeholder="name"
      name="name"
      required
      onChange={onChangeHandler}
      value={formData.name}
    />
    <input
      type="number"
      name="age"
      id="age"
      min={3}
      max={20}
      placeholder="age"
      required
      onChange={onChangeHandler}
      value={formData.age}
    />

    <select
      name="gender"
      id="gender"
      required
      onChange={onChangeHandler}
      value={formData.gender}
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Not mention">Not mention</option>
    </select>

    <input
      type="number"
      placeholder="grade/class"
      name="grade"
      id=""
      min={1}
      max={12}
      required
      onChange={onChangeHandler}
      value={formData.grade}
    />
    <input
      type="number"
      placeholder="attendance"
      name="attendance"
      id=""
      min={0}
      max={300}
      required
      onChange={onChangeHandler}
      value={formData.attendance}
    />
    <input
      type="number"
      placeholder="marks"
      name="marks"
      id=""
      min={0}
      max={500}
      required
      onChange={onChangeHandler}
      value={formData.marks}
    />
    <button>Update Student</button>
  </form>
  }
  else return <>
   <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="name"
          name="name"
          required
          value={formData.name}
          onChange={onChangeHandler}
        />
        <input
          type="number"
          name="contact"
          id="contact"
          min={6000000000}
          max={9999999999}
          placeholder="Contact Number"
          required
          value={formData.contact}
          onChange={onChangeHandler}
        />

        <select
          name="subject"
          id="subject"
          required
          value={formData.subject}
          onChange={onChangeHandler}
        >
          <option value="">Select subject</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Social Science">Social Science</option>
          <option value="Science">Science</option>
          <option value="Computer">Computer</option>
          <option value="Physical Education">Physical Education</option>
          <option value="Sanskrit">Sanskrit</option>
        </select>

        <button>Update Teacher</button>
      </form>
  </>

}