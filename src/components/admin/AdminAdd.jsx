import React from "react";

const AdminAdd = () => {
  return (
    <div>
      <h1>Admin Panel - Travel Plans</h1>
      <div>
        <h2>Add New Plan</h2>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={newPlan.destination}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={newPlan.date}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handlePostPlan}>Add Plan</button>
      </div>
    </div>
  );
};

export default AdminAdd;
