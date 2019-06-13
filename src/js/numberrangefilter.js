import DataAdapter from 'js-filters/DataAdapter';
import GetterFilterHandler from 'js-filters/GetterHandler';
import NumberRangeFilter from 'js-filters/Filters/NumberRange';

const fromFilterElement = document.querySelector('[name="from-filter"]');
const toFilterElement = document.querySelector('[name="to-filter"]');
const getItems = () => document.querySelectorAll('#list li');
const adapter = new DataAdapter(
	[fromFilterElement, toFilterElement],
	filteredItem => parseInt(filteredItem.textContent),
	([fromFilter, toFilter]) => [parseInt(fromFilter.value), parseInt(toFilter.value)],
);
const filters = [
	new NumberRangeFilter(adapter),
];

const handler = new GetterFilterHandler(filters, getItems);

function changeCallback() {
	handler.filterIterationCallback((item, passed) => {
		if (passed)
			item.style.display = 'block';
		else
			item.style.display = 'none';
	});
}

fromFilterElement.addEventListener('change', changeCallback);
toFilterElement.addEventListener('change', changeCallback);
