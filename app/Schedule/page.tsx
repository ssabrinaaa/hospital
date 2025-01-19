"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      className="flex flex-col items-center px-4 relative"
      noValidate
      autoComplete="off"
    >
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lh-120 pt-5">
          Find Your Scheduled Care
        </h1>
        {/* First Name */}
        <TextField id="first-name" label="First Name" multiline fullWidth />

        {/* Last Name */}
        <TextField id="last-name" label="Last Name" multiline fullWidth />

        {/* Email */}
        <TextField id="email" label="Email" type="email" fullWidth />

        {/* Phone Number */}
        <TextField id="phone-number" label="Phone Number" type="tel" fullWidth />

        {/* Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            slots={{ textField: TextField }}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </LocalizationProvider>
      </div>

      {/* Submit Button */}
    <div className="center top-full mt-4">
        <Button
                variant="contained"
                size="medium"
                sx={{
                backgroundColor: "#1976d2", // Custom blue color
                ":hover": { backgroundColor: "#1565c0" }, // Darker blue on hover
                color: "black", // Set the text color to white
                }}
            >
            Submit
        </Button>
    </div>

    </Box>
  );
}
