import React, { useEffect, useState } from "react";
import List from "./List";
import { Container } from "@mui/material";
import axiosInstance from "../../axios/AxiosInstance";

const Index = () => {
  const [data, setData] = useState([{}]);
  const [buttontext, setButtonText] = useState("Add New");
  const [formData, setFormData] = useState({});
  const [createnew, setCreateNew] = useState(false);

  //   alert("Token" + token);
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // alert(JSON.stringify(formData));
  };

  const getData = async () => {
    await axiosInstance
      .get("/student/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
    // setData(myData);
  };
  const getFormData = async (id) => {
    await axiosInstance
      .get("/student/" + id)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
    handleButtonText();
  };

  const handleCreateNew = () => {
    setFormData([{}]);
    handleButtonText();
  };

  const handleSubmit = async () => {
    if (formData.id && formData.id > 0) {
      await axiosInstance
        .put("/student/" + formData.id + "/", formData)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          alert(error);
        });
      setData([{}]);
      handleButtonText();
      alert("Record added successfully.");
    } else {
      await axiosInstance
        .post("/student/", formData)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          alert(error);
        });
      setData([{}]);
      handleButtonText();
      alert("Record added successfully.");
    }
  };
  const handleDelete = async (id) => {
    await axiosInstance
      .delete("/student/" + formData.id + "/")
      .then((response) => {
        setData([{}]);
        setCreateNew(false);
        alert("Record deleted successfully.");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleButtonText = () => {
    if (createnew) {
      setButtonText("Add New");
      setCreateNew(!createnew);
    } else {
      setButtonText("Return to List");
      setCreateNew(!createnew);
    }
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <Container>
      <h3>CRUD Operations with Axios</h3>

      <List
        data={data}
        formData={formData}
        createnew={createnew}
        handleCreateNew={handleCreateNew}
        buttontext={buttontext}
        handleFormData={handleFormData}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        getFormData={getFormData}
      />
    </Container>
  );
};

export default Index;
