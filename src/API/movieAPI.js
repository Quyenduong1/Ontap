import axiosClient from "./AxiosClient";

export const apiGetMovies = async () => {
        const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachPhim")
        console.log(data);
        return data;
};

export const apiGetBanner = async () => {
    const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachBanner")
    return data;
};

export const apiGetMovieDetail = async (movieId) => {
    const { data } = await axiosClient.get("/QuanLyPhim/LayThongTinPhim", {
        params: {
            MaPhim: movieId,
        }
    })
    return data;
};