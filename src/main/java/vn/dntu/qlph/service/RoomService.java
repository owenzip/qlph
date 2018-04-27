package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.RoomVO;

public interface RoomService {
    void insertRoom(@Param("idPhong") int idPhong,@Param("idDmPhong") int idDmPhong,@Param("gioBatDau") String gioBatDau, @Param("gioKetThuc") String gioKetThuc,@Param("ngay") String ngay, @Param("soNguoi") int soNguoi,@Param("mucDich") String mucDich, @Param("nguoiDaiDien") int nguoiDaiDien);
}
