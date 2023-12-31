/*. /pages/api/exit-preview.js */

export default function handler(req, res) {
  try {
    // Clears the preview mode cookies.
    // This function accepts no arguments.
    res.clearPreviewData();

    return res
      .status(200)
      .json({ message: "Preview mode closed, Cookies Cleared" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
