export const formatDate = (dateString: string) => {
	return new Date(dateString.split('T')[0]).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};

export const basicFormatDate = (dateString: string) => {
	return dateString.split('T')[0];
};

export const getPlanetId = (fullUrl: string) => {
	const modifiedUrl = fullUrl.split('/');
	return modifiedUrl[modifiedUrl.length - 2];
};
