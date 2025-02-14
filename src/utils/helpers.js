export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getStatusClass = (status) => {
  const statusMap = {
    "under observation": "observation",
    cured: "cured",
    inactive: "inactive",
  };
  return `status-${statusMap[status.toLowerCase()] || "default"}`;
};

export const formatPhoneNumber = (phone) => {
  return phone || "N/A";
};
