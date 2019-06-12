import DataAdapter from 'js-filters/DataAdapter';
import FilterHandler from 'js-filters/Handler';
import SomeTypeFilter from 'js-filters/Filters/SomeType';

const filterElement = document.querySelector('[name="filter"]');
const getItems = () => document.querySelectorAll('#list li');
const adapter = new DataAdapter(
	filterElement,
	filteredItem => filteredItem.textContent.split(','),
	filter => Array.from(filter.selectedOptions).map(option => option.value),
);
const filters = [
	new SomeTypeFilter(adapter),
];

const handler = new FilterHandler(filters, getItems);

filterElement.addEventListener('change', function() {
	handler.filterIterationCallback((item, passed) => {
		if (passed)
			item.style.display = 'block';
		else
			item.style.display = 'none';
	});
});
