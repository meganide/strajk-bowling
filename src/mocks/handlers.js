import { http, HttpResponse } from "msw";

export const handlers = [
	http.post("https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com", () => {
		return HttpResponse.json({
			when: "2023-12-08T15:00",
			lanes: "1",
			people: "2",
			shoes: ["40", "44"],
			price: 340,
			id: "STR9124FVQK",
			active: true
		});
	})
];
