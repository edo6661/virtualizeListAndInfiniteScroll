import axiosAku from '../config/axiosConfig';

export const getPlanets = async ({
	pageParam,
}: {
	pageParam: number;
}): Promise<Planets> => {
	try {
		const { data } = await axiosAku.get(`/planets/?page=${pageParam}`);
		return data;
	} catch (err) {
		console.error(err);
		return Promise.reject(err);
	}
};

export const getPlanet = async (id: string): Promise<Planet> => {
	try {
		const { data } = await axiosAku.get(`/planets/${id}`);
		return data;
	} catch (err) {
		console.error(err);
		return Promise.reject(err);
	}
};
