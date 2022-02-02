import {
    createRecord,
    getRecords,
    updateRecord,
} from "../../Services/Generic";

export const getRecord = async (req, res) => {
    try {
        const records = await getRecords(req);

        return res.status(200).send(records);
    } catch ({ errors: [{ message }] }) {
        return res.status(500).send({ error: message });
    }
};

export const postRecord = async (req, res) => {
    try {
        const record = await createRecord(req);

        return res.status(200).send(record);
    } catch ({ errors: [{ message }] }) {
        return res.status(500).send({ error: message });
    }
};

export const putRecord = async (req, res) => {
    try {
        const record = await updateRecord(req);

        return res.status(200).send(record);
    } catch ({ errors: [{ message }] }) {
        return res.status(500).send({ error: message });
    }
};
