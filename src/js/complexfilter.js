import DataAdapter from 'js-filters/DataAdapter';
import GetterFilterHandler from 'js-filters/GetterHandler';
import NormalizedStringFilter from 'js-filters/Filters/NormalizedString';
import GreaterNumberFilter from 'js-filters/Filters/GreaterNumber';
import NumberRangeFilter from 'js-filters/Filters/NumberRange';
import EveryTypeFilter from 'js-filters/Filters/EveryType';


const nameFilterElement = document.querySelector('[name="name-filter"]');
const ageFilterElement = document.querySelector('[name="age-filter"]');
const salaryFromFilterElement = document.querySelector('[name="salary-from-filter"]');
const salaryToFilterElement = document.querySelector('[name="salary-to-filter"]');
const favouriteColorFilterElement = document.querySelector('[name="favourite-color-filter"]');


const getItems = () => document.querySelectorAll('#table tbody tr');
const filters = [
	new NormalizedStringFilter(new DataAdapter(
		nameFilterElement,
		filteredItem => filteredItem.dataset.name,
		filter => filter.value
	)),
	new GreaterNumberFilter(new DataAdapter(
		ageFilterElement,
		filteredItem => parseInt(filteredItem.dataset.age),
		filter => parseInt(filter.value),
	)),
	new NumberRangeFilter(new DataAdapter(
		[salaryFromFilterElement, salaryToFilterElement],
		filteredItem => parseInt(filteredItem.dataset.salary),
		([fromFilter, toFilter]) => [parseInt(fromFilter.value), parseInt(toFilter.value)],
	)),
	new EveryTypeFilter(new DataAdapter(
		favouriteColorFilterElement,
		filteredItem => filteredItem.dataset.favouriteColors.split(','),
		filter => Array.from(filter.selectedOptions).map(option => option.value),
	)),
];

const handler = new GetterFilterHandler(filters, getItems);

function changeCallback() {
	handler.filterIterationCallback((item, passed) => {
		if (passed)
			item.style.display = 'table-row';
		else
			item.style.display = 'none';
	});
}

nameFilterElement.addEventListener('change', changeCallback);
ageFilterElement.addEventListener('change', changeCallback);
salaryFromFilterElement.addEventListener('change', changeCallback);
salaryToFilterElement.addEventListener('change', changeCallback);
favouriteColorFilterElement.addEventListener('change', changeCallback);
