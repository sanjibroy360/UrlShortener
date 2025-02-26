import axios from "./axios";

export const fetchUrls = async () => {
  const { data } = await axios.get("/urls");
  return data;
};

export const createUrl = async (longUrl: string) => {
  const { data } = await axios.post("/urls", {
    url: { long_url: longUrl },
  });
  return data;
};

export const deleteUrl = async (id: string) => {
  await axios.delete(`/urls/${id}`);
};
