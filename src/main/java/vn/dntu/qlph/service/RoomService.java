package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.DetailRoomVO;
import vn.dntu.qlph.model.RoomVO;

import java.util.List;

public interface RoomService {
    void insertRoom(RoomVO roomVO);

    void insertMember(DetailRoomVO detailRoomVO);

    List<RoomVO> selectRoomToDay(@Param("idDmPhong") int idDmPhong);

    List<RoomVO> selectRoomById(@Param("nguoiDaiDien") int nguoiDaiDien);
}
