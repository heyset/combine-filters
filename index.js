const combineFilters = ([head, ...tail]) => (data) => (head ? (head(data) && combineFilters(tail)(data)) : true);

export default combineFilters;
