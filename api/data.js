const site_id = 22211231;
const access_token =
  "121.0a3259e92647f2426386a37cc1a6a427.YlI4NfVF9GptzSoZGMUqGIC0uF1pngwr9X3JAXe.XD6knQ";
const start_date = "20250712";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}
export default async (req, res) => {
  const end_date = formatDate(new Date());
  const url = `https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=${access_token}&site_id=${site_id}&method=visit/toppage/a&start_date=${start_date}&end_date=${end_date}&metrics=pv_count,visitor_count`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // 确保将响应转换为 JSON
    res.status(200).json(data); // 返回实际数据
  } catch (error) {
    console.error("Error fetching data from Baidu:", error);
    res.status(500).json({ error: "Failed to fetch data from Baidu" });
  }
};
