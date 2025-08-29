import { sanitizeInput } from "../../utils/sanitize.js";

function sanitizeRequest(req) {
  if (req.query) req.query = sanitizeInput(req.query);
  if (req.params) req.params = sanitizeInput(req.params);
  if (req.body) req.body = sanitizeInput(req.body);
}

export { sanitizeRequest };
