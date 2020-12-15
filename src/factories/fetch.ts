function fetchFactory(input: RequestInfo, init?: RequestInit): Promise<any> {
	return window.fetch(input, init).then((response) => response.json());
}

export default fetchFactory;
