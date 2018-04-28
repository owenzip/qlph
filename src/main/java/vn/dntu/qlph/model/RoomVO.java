package vn.dntu.qlph.model;

import org.apache.ibatis.type.Alias;

import java.util.List;

@Alias("RoomVO")
public class RoomVO {

    private int idPhong;
    private int idDmPhong;
    private String gioBatDau;
    private String gioKetThuc;
    private int trangThai;
    private String ngay;
    private int soNguoi;
    private String mucDich;
    private int nguoiDaiDien;
    private int idNguoiDung;
    List<DetailRoomVO> detailRoomVO;

    public List<DetailRoomVO> getDetailRoomVO() {
        return detailRoomVO;
    }

    public void setDetailRoomVO(List<DetailRoomVO> detailRoomVO) {
        this.detailRoomVO = detailRoomVO;
    }

    public int getIdNguoiDung() {
        return idNguoiDung;
    }

    public void setIdNguoiDung(int idNguoiDung) {
        this.idNguoiDung = idNguoiDung;
    }

    public int getIdPhong() {
        return idPhong;
    }

    public void setIdPhong(int idPhong) {
        this.idPhong = idPhong;
    }

    public int getIdDmPhong() {
        return idDmPhong;
    }

    public int getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(int trangThai) {
        this.trangThai = trangThai;
    }

    public void setIdDmPhong(int idDmPhong) {
        this.idDmPhong = idDmPhong;
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

    public String getMucDich() {
        return mucDich;
    }

    public void setMucDich(String mucDich) {
        this.mucDich = mucDich;
    }

    public int getNguoiDaiDien() {
        return nguoiDaiDien;
    }

    public void setNguoiDaiDien(int nguoiDaiDien) {
        this.nguoiDaiDien = nguoiDaiDien;
    }

    public String getGioBatDau() {
        return gioBatDau;
    }

    public void setGioBatDau(String gioBatDau) {
        this.gioBatDau = gioBatDau;
    }

    public int getSoNguoi() {
        return soNguoi;
    }

    public void setSoNguoi(int soNguoi) {
        this.soNguoi = soNguoi;
    }
}
