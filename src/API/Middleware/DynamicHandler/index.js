import { modelRoute } from "../../../Models";

// Returns a message to specify valid routes
let APIMessage = "Available models/routes are: \n\n";
Object.keys(modelRoute).forEach((model, idx) => {
    APIMessage += `${idx + 1}- ${model} \n`;
});

// Gets the correct model and embeds it in the request, or passes an API message
export const getModel = (req, res, next) => {
    
    req.model = modelRoute[req.params.model];

    req.model ? next() : next(APIMessage);
};