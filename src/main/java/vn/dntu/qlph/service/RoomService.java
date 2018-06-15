/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.DetailRoomVO;
import vn.dntu.qlph.model.RoomVO;

import java.util.List;

public interface RoomService {

    void insertRoom(RoomVO roomVO);

    void insertMember(DetailRoomVO detailRoomVO);

    void deleteRoom(@Param("idPhong") int idPhong);

    void updateStatus(@Param("idPhong") int idPhong, @Param("trangThai") int trangThai);

    List<RoomVO> selectRoomToDay(@Param("idDmPhong") int idDmPhong);

    List<RoomVO> selectRoomById(@Param("nguoiDaiDien") int nguoiDaiDien);

    List<DetailRoomVO> selectMembersByRoom(@Param("idPhong") int idPhong);

    List<RoomVO> selectAllRoom(@Param("trangThai") String trangThai);

    List<RoomVO> checkRoomExists(@Param("ngay") String ngay, @Param("gioBatDau") String gioBatDau, @Param("gioKetThuc") String gioKetThuc, @Param("idDmPhong") int idDmPhong);
}
