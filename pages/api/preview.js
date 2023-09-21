/* ./pages/api/preview.js */

import { getPageData } from "../../lib/api";
import { previewSecret } from "../../config/variableConfig";

export default async function handler(req, res) {
  if (req.query.secret !== (previewSecret || "secret-token")) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const pageData = await getPageData(req.query.slug, true);

  if (!pageData) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({});

  res.writeHead(307, { Location: `/blog/${req.query.slug}` });
  res.end();
}
