package vn.dntu.qlph.model;

import org.apache.ibatis.type.Alias;

@Alias("DetailRoomVO")
public class DetailRoomVO {

    private int idPhong;
    private int idChiTietPhong;
    private int idNguoiDung;
    private String tenNguoiDung;
    private String lop;
    private int mssv;

    public String getTenNguoiDung() {
        return tenNguoiDung;
    }

    public void setTenNguoiDung(String tenNguoiDung) {
        this.tenNguoiDung = tenNguoiDung;
    }

    public String getLop() {
        return lop;
    }

    public void setLop(String lop) {
        this.lop = lop;
    }

    public int getMssv() {
        return mssv;
    }

    public void setMssv(int mssv) {
        this.mssv = mssv;
    }

    public int getIdPhong() {
        return idPhong;
    }

    public void setIdPhong(int idPhong) {
        this.idPhong = idPhong;
    }

    public int getIdChiTietPhong() {
        return idChiTietPhong;
    }

    public void setIdChiTietPhong(int idChiTietPhong) {
        this.idChiTietPhong = idChiTietPhong;
    }

    public int getIdNguoiDung() {
        return idNguoiDung;
    }

    public void setIdNguoiDung(int idNguoiDung) {
        this.idNguoiDung = idNguoiDung;
    }
}
