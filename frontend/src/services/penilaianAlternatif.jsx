import axios from "axios";

// API endpoint
const API_URL = "http://localhost:9000/api/cms/alternatifScore";

// Get all penilaian Alternatif
export const fetchPenilaianAlternatif = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data : ", error);
    return [];
  }
};

// Add penilaian alternatif
export const addPenilaianAlternatif = async (newData) => {
  try {
    const response = await axios.post(API_URL, newData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding data:", error);
    return null;
  }
};

// Update penilaian alternatif
export const updatePenilaianAlternatif = async (id, updateData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updateData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data: ", error);
    return null;
  }
};

// Delete penilaian alternatif
export const deletePenilaianAlternatif = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting data : ", error);
    return false;
  }
};
