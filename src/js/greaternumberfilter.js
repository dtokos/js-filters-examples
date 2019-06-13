import DataAdapter from 'js-filters/DataAdapter';
import GetterFilterHandler from 'js-filters/GetterHandler';
import GreaterNumberFilter from 'js-filters/Filters/GreaterNumber';

const filterElement = document.querySelector('[name="filter"]');
const getItems = () => document.querySelectorAll('#list li');
const adapter = new DataAdapter(
	filterElement,
	filteredItem => parseInt(filteredItem.textContent),
	filter => parseInt(filter.value),
);
const filters = [
	new GreaterNumberFilter(adapter),
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
