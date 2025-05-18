import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSubmit } from "../ReduxStore/userSlice";

function UserInput() {
  const [age, setAge] = useState("");
  const [Name, setName] = useState("");
  const [Experience, setExperience] = useState("");
  const [CollegeName, setCollegeName] = useState("");
  const [Cgpa, setCgpa] = useState("");
  const [JobRole, setJobRole] = useState("");
  const [Projects, setProjects] = useState("");

  const dispatch = useDispatch();

  const setAgee = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setAge(e.target.value);
  };

  const setNamee = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const setExperiencee = (e) => {
    e.preventDefault();
    setExperience(e.target.value);
  };

  const setCollegeNamee = (e) => {
    e.preventDefault();
    setCollegeName(e.target.value);
  };

  const setCgpaa = (e) => {
    e.preventDefault();
    setCgpa(e.target.value);
  };

  const setJobRolee = (e) => {
    e.preventDefault();
    setJobRole(e.target.value);
  };

  const setProjectss = (e) => {
    e.preventDefault();
    setProjects(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    const value = {
      Age: age,
      Name: Name,
      Experience: Experience,
      CollegeName: CollegeName,
      Cgpa: Cgpa,
      JobRole: JobRole,
      Projects: Projects,
    };

    dispatch(setSubmit(value));
  };

  return (
    <form className="form-submit" onSubmit={(e) => Submit(e)}>
      <input type="text" placeholder="name" onChange={(e) => setNamee(e)} />
      <input type="text" placeholder="age" onChange={(e) => setAgee(e)} />
      <input
        type="text"
        placeholder="Experience"
        onChange={(e) => setExperiencee(e)}
      />
      <input
        type="text"
        placeholder="college name"
        onChange={(e) => setCollegeNamee(e)}
      />
      <input type="text" placeholder="cgpa" onChange={(e) => setCgpaa(e)} />
      <input
        type="text"
        placeholder="job-role"
        onChange={(e) => setJobRolee(e)}
      />
      <input
        type="text"
        placeholder="projects"
        onChange={(e) => setProjectss(e)}
      />
      <button>submit</button>
    </form>
  );
}

export default UserInput;
