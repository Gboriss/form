export default function localData() {
	return {
		set: data => localStorage && localStorage.setItem('todos', JSON.stringify(data)),
		get: () => localStorage && (JSON.parse(localStorage.getItem('todos')) || [])
	}
}