"use client";

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Button from "@mui/material/Button";
import dayjs, { Dayjs } from "dayjs";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  date: Dayjs | null;
  time: Dayjs | null;
}

export default function ScheduleAppointment() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: null,
    time: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setFormData({ ...formData, date: newDate });
  };

  const handleTimeChange = (newTime: Dayjs | null) => {
    setFormData({ ...formData, time: newTime });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const appointmentData = {
      ...formData,
      date: formData.date?.format("YYYY-MM-DD"),
      time: formData.time?.format("HH:mm"),
    };

    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentData),
    });

    const result = await response.json();
    if (result.success) {
      alert("Appointment booked successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        date: null,
        time: null,
      });
    } else {
      alert("Failed to book appointment. Try again.");
    }
  };

  return (
    <Box component="form" className="flex flex-col items-center px-4 relative" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lh-120 pt-5">
          Find Your Scheduled Care
        </h1>

        <TextField id="firstName" label="First Name" value={formData.firstName} onChange={handleChange} fullWidth />

        <TextField id="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} fullWidth />

        <TextField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} fullWidth />

        <TextField id="phoneNumber" label="Phone Number" type="tel" value={formData.phoneNumber} onChange={handleChange} fullWidth />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Select Date" value={formData.date} onChange={handleDateChange} slotProps={{ textField: { fullWidth: true } }} />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker label="Select Time" value={formData.time} onChange={handleTimeChange} slotProps={{ textField: { fullWidth: true } }} />
        </LocalizationProvider>
      </div>

      <div className="center top-full mt-4">
        <Button type="submit" variant="contained" size="medium" sx={{ backgroundColor: "#1976d2", color: "black" }}>
          Submit
        </Button>
      </div>
    </Box>
  );
}
