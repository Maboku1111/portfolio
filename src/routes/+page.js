/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`https://bible-api.com/data/web/random`)
	const verse = await res.json();
	console.log(verse.random_verse.book + " " + verse.random_verse.chapter + ":" + verse.random_verse.verse)

	return { verse }
}