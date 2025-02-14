const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

const getAuthHeaders = () => ({
  Authorization: `Basic ${btoa("coalition:skills-test")}`,
});

export const fetchPatientData = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch patient data");
    }

    const data = await response.json();
    return data.find((patient) => patient.name === "Jessica Taylor");
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw error;
  }
};
