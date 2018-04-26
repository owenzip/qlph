package vn.dntu.qlph.model;

import org.apache.ibatis.type.Alias;

@Alias("ContactVO")
public class ContactVO {

    private int idLienHe;
    private String idVanDe;
    private int sdt;
    private String noiDung;

    public int getIdLienHe() {
        return idLienHe;
    }

    public void setIdLienHe(int idLienHe) {
        this.idLienHe = idLienHe;
    }

    public String getIdVanDe() {
        return idVanDe;
    }

    public void setIdVanDe(String idVanDe) {
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
