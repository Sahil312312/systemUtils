import React from "react";
import "./FilterPannel.css"

const FilterPanel = ({
  selectedChecks,
  setSelectedChecks,
  selectedSorting,
  setSelectedSorting,
  filter,
  setFilter,
  handleSubmit,
}) => {
  // Toggle checkboxes for flags
  const toggleCheck = (field) => {
    setSelectedChecks((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Toggle checkboxes for sorting
  const toggleSort = (field) => {
    setSelectedSorting((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle dropdown change
  const handleFieldChange = (e) => {
    setFilter((prev) => ({ ...prev, field: e.target.value }));
  };

  // Handle input change
  const handleValueChange = (e) => {
    setFilter((prev) => ({ ...prev, value: e.target.value }));
  };

  return (
    <div className="utilityPageFilters">
      {/* Flags */}
      <div className="utilityPageIndFilter">
        <div className="utilityPageFilterHeader">Flags</div>
        <div className="utilityPageFilterBody">
          {Object.keys(selectedChecks).map((field) => (
            <label key={field} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={selectedChecks[field]}
                onChange={() => toggleCheck(field)}
              />
              {field}
            </label>
          ))}
        </div>
      </div>

      {/* Sorting */}
      <div className="utilityPageIndFilter">
        <div className="utilityPageFilterHeader">Sorting</div>
        <div className="utilityPageFilterBody">
          {Object.keys(selectedSorting).map((field) => (
            <label key={field} className="">
              <input
                type="checkbox"
                checked={selectedSorting[field]}
                onChange={() => toggleSort(field)}
              />
              {field}
            </label>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="utilityPageIndFilter">
        <div className="utilityPageFilterHeader">Filters</div>
        <div className="utilityPageFilterBody">
          <label>
            Field:
            <select value={filter.field} onChange={handleFieldChange}>
              <option value="">Select Field</option>
              <option value="machineId">Machine Id</option>
              <option value="os">Operating System</option>
              <option value="checkSleepSettings">Sleep Settings</option>
            </select>
          </label>

          <label>
            Value:
            <input
              type="text"
              value={filter.value}
              onChange={handleValueChange}
            />
          </label>
        </div>
      </div>

      {/* Submit */}
      <div className="utilityPageIndFilter">
        <button onClick={handleSubmit} className="utilityPageFilterButton">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
