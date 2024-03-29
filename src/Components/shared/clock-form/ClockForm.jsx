import React, { useEffect, useState } from "react";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";
import { getOffset } from "../../../utils/timezone";

const ClockForm = ({
  values = { title: "", timezone: "GMT", offset: 0 },
  handleClock,
  title = true,
  edit = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });

  //handleChange function
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = Number(value) * 60;
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Enter Your Title</label>
        <input
          type="text"
          id="title"
          name="title"
          disabled={!title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="timezone">Enter Your Timezone</label>
        <select
          id="timezone"
          name="timezone"
          value={formValues.timezone}
          onChange={handleChange}
        >
          <option value="UTC">UTC</option>
          <option value="GMT">GMT</option>
          <option value="PST">PST</option>
          <option value="EDT">EDT</option>
          <option value="BST">BST</option>
          <option value="MST">MST</option>
        </select>
      </div>

      {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
        <div>
          <label htmlFor="offset">Enter Your Offset</label>
          <select
            name="offset"
            value={formValues.offset / 60}
            onChange={handleChange}
          >
            {getOffset().map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}

      <button>{edit ? "Update" : "Create"}</button>
    </form>
  );
};

export default ClockForm;
