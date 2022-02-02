export const getRecords = async ({
	model,
	params: { id },
}) => {
	if (id) return await getModelById(model, id);
	if (!id) return await getModelAll(model);
};

export const createRecord = async ({ model, body }) => {
	return await model.create(body);
};

export const updateRecord = async ({ model, params: { id }, body }) => {
	await model.update({ ...body }, { where: { id } });
	return await req.model.findByPk(id);
};

const getModelById = async (model, id) => {
	return await model.findByPk(id);
};

const getModelAll = async (model) => {
	return await model.findAll();
};
