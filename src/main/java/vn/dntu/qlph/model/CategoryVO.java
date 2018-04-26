package vn.dntu.qlph.model;

import org.apache.ibatis.type.Alias;

@Alias("CategoryVO")
public class CategoryVO {

    private int idVanDe;
    private String vanDe;

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
}
