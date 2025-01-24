import React, { useState } from "react";
import "./anonymous.css";

const AnonymousForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    approxAge: "",
    height: "",
    color: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", approxAge: "", height: "", color: "" });
  };

  return (
    <div className="anonymous-form-container">
      <form className="anonymous-form" onSubmit={handleSubmit}>
        <h2>Fill Anonymous Data</h2>
        <label>
          Name (Optional):
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter name"
            onChange={handleChange}
          />
        </label>
        <label>
          Approximate Age:
          <input
            type="text"
            name="approxAge"
            value={formData.approxAge}
            placeholder="Enter age range (e.g., 25-30)"
            onChange={handleChange}
            required
          />
        </label>
        <label>
  Height:
  <input
    type="text"
    name="height"
    value={formData.height}
    placeholder="Enter height range (e.g., 6'7)"

    onChange={handleChange}
    required
  />
</label>

        <label>
          Appearance/Color:
          <input
            type="text"
            name="color"
            value={formData.color}
            placeholder="Enter a color description"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name || "Anonymous"}</p>
          <p>Approximate Age: {submittedData.approxAge}</p>
          <p>Height: {submittedData.height}</p>
          <p>Appearance: {submittedData.color}</p>
        </div>
      )}
    </div>
  );
};

export default AnonymousForm;
