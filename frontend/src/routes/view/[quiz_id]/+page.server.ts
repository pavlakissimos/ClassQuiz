// SPDX-FileCopyrightText: 2023 Marlon W (Mawoka)
//
// SPDX-License-Identifier: MPL-2.0

import { error } from '@sveltejs/kit';

export const load = async ({ params, parent }) => {
	const { quiz_id } = params;
	console.log('process.env.API_URL', process.env.API_URL);

	const res = await fetch(`${process.env.API_URL}/api/v1/quiz/get/public/${quiz_id}`);
	console.log('res', res);
	console.log('res stringified', JSON.stringify(res, null, 2));

	const { email } = await parent();
	console.log('email', email);

	if (res.status === 404 || res.status === 400) {
		throw error(404);
	} else if (res.status === 200) {
		const quiz = await res.json();
		console.log('quiz', quiz);

		return {
			quiz,
			logged_in: Boolean(email)
		};
	} else {
		throw error(500);
	}
};
