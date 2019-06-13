import DataAdapter from 'js-filters/DataAdapter';
import GetterFilterHandler from 'js-filters/GetterHandler';
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

const handler = new GetterFilterHandler(filters, getItems);

filterElement.addEventListener('change', function() {
	handler.filterIterationCallback((item, passed) => {
		if (passed)
			item.style.display = 'block';
		else
			item.style.display = 'none';
	});
});
