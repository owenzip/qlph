package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.CategoryVO;
import vn.dntu.qlph.model.ContactVO;

import java.util.ArrayList;

public interface ContactService {
    void insertContact(@Param("idVanDe") int idVanDe,@Param("sdt") int sdt,@Param("noiDung") String noiDung);
}
