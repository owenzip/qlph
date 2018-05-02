package vn.dntu.qlph.model;

import org.apache.ibatis.type.Alias;

@Alias("DetailRoomVO")
public class DetailRoomVO {

    private int idPhong;
    private int idChiTietPhong;
    private String tenNguoiDungDetails;
    private String lopDetails;
    private int mssvDetails;

    public String getTenNguoiDungDetails() {
        return tenNguoiDungDetails;
    }

    public void setTenNguoiDungDetails(String tenNguoiDungDetails) {
        this.tenNguoiDungDetails = tenNguoiDungDetails;
    }

    public String getLopDetails() {
        return lopDetails;
    }

    public void setLopDetails(String lopDetails) {
        this.lopDetails = lopDetails;
    }

    public int getMssvDetails() {
        return mssvDetails;
    }

    public void setMssvDetails(int mssvDetails) {
        this.mssvDetails = mssvDetails;
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
}
