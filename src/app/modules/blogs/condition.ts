import { blogs_search_condition_keys } from "./constant";
import { IBlogsFilter } from "./interface";

export const GetWhereConditions = (
	filters: IBlogsFilter | null | undefined
) => {
	if (!filters) return {}; // Handle undefined or null filters early

	const { search, ...filterData } = filters;
	const andConditions = [];

	// Handle search conditions
	if (search) {
		andConditions.push({
			OR: blogs_search_condition_keys.map((field) => ({
				[field]: {
					contains: search,
					mode: "insensitive",
				},
			})),
		});
	}

	// Handle other filter conditions
	const filterKeys = Object.keys(filterData);
	if (filterKeys.length > 0) {
		const filterConditions = filterKeys.map((key) => ({
			[key]: {
				equals: filterData[key as keyof typeof filterData], // Ensure type safety
			},
		}));
		andConditions.push({ AND: filterConditions });
	}

	// Return constructed conditions or an empty object
	return andConditions.length > 0 ? { AND: andConditions } : {};
};

