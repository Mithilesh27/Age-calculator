import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the date picker
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState();
  const [opacityValue, setOpacityValue] = useState(0);
  //set date when it is picked from DatePicker
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  //calculate age when button is clicked
  const calculateAge = () => {
    if (selectedDate) {
      setOpacityValue(1);
      const currentDate = new Date();
      const birthDate = selectedDate;
      const ageDiff = Math.abs(currentDate - birthDate);
      const ageInYears = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));
      setAge(ageInYears);
    } else {
      setAge(null);
      alert("Please Enter Date of birth");
      setOpacityValue(0);
    }
  };
  return (
    <>
      <div className="age-calculator">
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <div className="custom-datepicker">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            isClearable
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={40}
            customInput={
              <div>
                <input
                  type="text"
                  placeholder="Select a date"
                  value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                  readOnly
                />
                <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
              </div>
            }
          />
        </div>
        <button onClick={calculateAge}>Calculate Age</button>
        <p style={{ opacity: opacityValue }}>You are {age} years old</p>
      </div>
    </>
  );
}

export default App;
