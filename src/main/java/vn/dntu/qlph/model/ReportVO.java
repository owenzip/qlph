/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.model;

import org.apache.ibatis.type.Alias;

@Alias("ReportVO")
public class ReportVO {

    private int soLanDangKyPhong;
    private int soPhongDaKetThuc;
    private int soPhongDangChoDuyet;
    private int soPhongDangHoatDong;
    private int soPhongDaHuy;
    private String phongSuDungNhieu;
    private int soLanDangKyPhongSuDungNhieu;
    private int tongSoNguoiSuDung;
    private int tongSoLanSuDung;
    private String tenPhong;
    private String gioBatDau;
    private String gioKetThuc;
    private String ngay;
    private String trangThai;
    private int soNguoi;

    public String getGioBatDau() {
        return gioBatDau;
    }

    public void setGioBatDau(String gioBatDau) {
        this.gioBatDau = gioBatDau;
    }

    public String getGioKetThuc() {
        return gioKetThuc;
    }

    public void setGioKetThuc(String gioKetThuc) {
        this.gioKetThuc = gioKetThuc;
    }

    public String getNgay() {
        return ngay;
    }

    public void setNgay(String ngay) {
        this.ngay = ngay;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }

    public int getSoNguoi() {
        return soNguoi;
    }

    public void setSoNguoi(int soNguoi) {
        this.soNguoi = soNguoi;
    }

    public String getTenPhong() {
        return tenPhong;
    }

    public void setTenPhong(String tenPhong) {
        this.tenPhong = tenPhong;
    }

    public int getTongSoLanSuDung() {
        return tongSoLanSuDung;
    }

    public void setTongSoLanSuDung(int tongSoLanSuDung) {
        this.tongSoLanSuDung = tongSoLanSuDung;
    }

    public int getSoLanDangKyPhong() {
        return soLanDangKyPhong;
    }

    public void setSoLanDangKyPhong(int soLanDangKyPhong) {
        this.soLanDangKyPhong = soLanDangKyPhong;
    }

    public int getSoPhongDaKetThuc() {
        return soPhongDaKetThuc;
    }

    public void setSoPhongDaKetThuc(int soPhongDaKetThuc) {
        this.soPhongDaKetThuc = soPhongDaKetThuc;
    }

    public int getSoPhongDangChoDuyet() {
        return soPhongDangChoDuyet;
    }

    public void setSoPhongDangChoDuyet(int soPhongDangChoDuyet) {
        this.soPhongDangChoDuyet = soPhongDangChoDuyet;
    }

    public int getSoPhongDangHoatDong() {
        return soPhongDangHoatDong;
    }

    public void setSoPhongDangHoatDong(int soPhongDangHoatDong) {
        this.soPhongDangHoatDong = soPhongDangHoatDong;
    }

    public int getSoPhongDaHuy() {
        return soPhongDaHuy;
    }

    public void setSoPhongDaHuy(int soPhongDaHuy) {
        this.soPhongDaHuy = soPhongDaHuy;
    }

    public String getPhongSuDungNhieu() {
        return phongSuDungNhieu;
    }

    public void setPhongSuDungNhieu(String phongSuDungNhieu) {
        this.phongSuDungNhieu = phongSuDungNhieu;
    }

    public int getSoLanDangKyPhongSuDungNhieu() {
        return soLanDangKyPhongSuDungNhieu;
    }

    public void setSoLanDangKyPhongSuDungNhieu(int soLanDangKyPhongSuDungNhieu) {
        this.soLanDangKyPhongSuDungNhieu = soLanDangKyPhongSuDungNhieu;
    }

    public int getTongSoNguoiSuDung() {
        return tongSoNguoiSuDung;
    }

    public void setTongSoNguoiSuDung(int tongSoNguoiSuDung) {
        this.tongSoNguoiSuDung = tongSoNguoiSuDung;
    }
}
