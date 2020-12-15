import useSWR from 'swr';

import { BASE_URL } from 'constants/api';

function useApi<Response, Error = unknown>(endPoint: string) {
	return useSWR<Response, Error>(`${BASE_URL}/${endPoint}`);
}

export default useApi;
