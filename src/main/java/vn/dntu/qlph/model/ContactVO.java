/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.model;

import org.apache.ibatis.type.Alias;

@Alias("ContactVO")
public class ContactVO {

    private int idLienHe;
    private int idVanDe;
    private int sdt;
    private String noiDung;
    private String email;
    private String ten;
    private String vanDe;
    private String ngay;
    private String gio;

    public String getNgay() {
        return ngay;
    }

    public void setNgay(String ngay) {
        this.ngay = ngay;
    }

    public String getGio() {
        return gio;
    }

    public void setGio(String gio) {
        this.gio = gio;
    }

    public String getVanDe() {
        return vanDe;
    }

    public void setVanDe(String vanDe) {
        this.vanDe = vanDe;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getIdLienHe() {
        return idLienHe;
    }

    public void setIdLienHe(int idLienHe) {
        this.idLienHe = idLienHe;
    }

    public int getIdVanDe() {
        return idVanDe;
    }

    public void setIdVanDe(int idVanDe) {
        this.idVanDe = idVanDe;
    }

    public int getSdt() {
        return sdt;
    }

    public void setSdt(int sdt) {
        this.sdt = sdt;
    }

    public String getNoiDung() {
        return noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }
}
