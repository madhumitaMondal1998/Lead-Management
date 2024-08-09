import React, { useEffect, useState } from "react";
import { getLeads, deleteLead } from "../../service/LeadService";

const LeadList = () => {
  const [leads, setLeads] = useState([]);

  const refreshLeads = async () => {
    const response = await getLeads();
    setLeads(response.data);
  };

  const handleDelete = async (id) => {
    await deleteLead(id);
    refreshLeads();
  };

  useEffect(() => {
    refreshLeads();
  }, []);

  return (
    <ul>
      {leads.map((lead) => (
        <li key={lead._id}>
          {lead.name} - {lead.product}
          <button onClick={() => handleDelete(lead._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default LeadList;
