export const notFoundHandler = (req, res, next) => {
	res.status(404).send('Error 404: not found')
}