package vn.dntu.qlph.model;

import org.apache.ibatis.type.Alias;

@Alias("CategoryVO")
public class CategoryVO {

    private int idVanDe;
    private String vanDe;
    private int idDmPhong;
    private String tenPhong;
    private int idNganh;
    private String nganh;
    private int idTrangThai;
    private String trangThai;


    public int getIdVanDe() {
        return idVanDe;
    }

    public void setIdVanDe(int idVanDe) {
        this.idVanDe = idVanDe;
    }

    public String getVanDe() {
        return vanDe;
    }

    public void setVanDe(String vanDe) {
        this.vanDe = vanDe;
    }

    public int getIdDmPhong() {
        return idDmPhong;
    }

    public void setIdDmPhong(int idDmPhong) {
        this.idDmPhong = idDmPhong;
    }

    public String getTenPhong() {
        return tenPhong;
    }

    public void setTenPhong(String tenPhong) {
        this.tenPhong = tenPhong;
    }

    public int getIdNganh() {
        return idNganh;
    }

    public void setIdNganh(int idNganh) {
        this.idNganh = idNganh;
    }

    public String getNganh() {
        return nganh;
    }

    public void setNganh(String nganh) {
        this.nganh = nganh;
    }

    public int getIdTrangThai() {
        return idTrangThai;
    }

    public void setIdTrangThai(int idTrangThai) {
        this.idTrangThai = idTrangThai;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }
}
