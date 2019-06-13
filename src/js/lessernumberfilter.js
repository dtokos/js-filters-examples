import DataAdapter from 'js-filters/DataAdapter';
import GetterFilterHandler from 'js-filters/GetterHandler';
import LesserNumberFilter from 'js-filters/Filters/LesserNumber';

const filterElement = document.querySelector('[name="filter"]');
const getItems = () => document.querySelectorAll('#list li');
const adapter = new DataAdapter(
	filterElement,
	filteredItem => parseInt(filteredItem.textContent),
	filter => parseInt(filter.value),
);
const filters = [
	new LesserNumberFilter(adapter),
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
