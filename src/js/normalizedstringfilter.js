import DataAdapter from 'js-filters/DataAdapter';
import FilterHandler from 'js-filters/Handler';
import NormalizedStringFilter from 'js-filters/Filters/NormalizedString';

const filterElement = document.querySelector('[name="filter"]');
const getItems = () => document.querySelectorAll('#list li');
const adapter = new DataAdapter(
	filterElement,
	filteredItem => filteredItem.textContent,
	filter => filter.value
);
const filters = [
	new NormalizedStringFilter(adapter),
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
