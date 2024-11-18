// import { useState, useEffect } from "react";

// API endpoint
const API_URL = "http://localhost:9000/api/cms/alternatifScore";

// Get all penilaian Alternatif
export const fetchPenilaianAlternatif = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data : ", error);
    return [];
  }
};

// Add penilaian alternatif
export const addPenilaianAlternatif = async (newData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    if (!response.ok) throw new Error("Failed to add data");
    return await response.json();
  } catch (error) {
    console.error("Error adding data:", error);
    return null;
  }
};

// Update penilaian alternatif
export const updatePenilaianAlternatif = async (id, updateData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) throw new Error("Failed to update data");
    return await response.json();
  } catch (error) {
    console.error("Error updating data: ", error);
    return null;
  }
};

// Delete penilaian alternatif
export const deletePenilaianAlternatif = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete data");
  } catch (error) {
    console.error("Error deleting data : ", error);
    return null;
  }
};
