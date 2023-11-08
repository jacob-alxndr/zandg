export default function handler(req, res) {
  res.clearPreviewData({});
  res.statusCode = 307;
  res.setHeader("Location", `${req.query.redirect}`);
  res.end();
}
