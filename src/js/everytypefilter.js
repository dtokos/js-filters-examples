import DataAdapter from 'js-filters/DataAdapter';
import GetterFilterHandler from 'js-filters/GetterHandler';
import EveryTypeFilter from 'js-filters/Filters/EveryType';

const filterElement = document.querySelector('[name="filter"]');
const getItems = () => document.querySelectorAll('#list li');
const adapter = new DataAdapter(
	filterElement,
	filteredItem => filteredItem.textContent.split(','),
	filter => Array.from(filter.selectedOptions).map(option => option.value),
);
const filters = [
	new EveryTypeFilter(adapter),
];

const handler = new GetterFilterHandler(filters, getItems);

filterElement.addEventListener('change', function() {
	handler.filterIterationCallback((item, passed) => {
		if (passed)
			item.style.display = 'block';
		else
			item.style.display = 'none';
	});
});
