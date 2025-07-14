export async function getPV(): Promise<any> {
  try {
    const response = await fetch("http://localhost:3000/api/pv");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}