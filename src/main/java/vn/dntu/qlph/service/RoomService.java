package vn.dntu.qlph.service;

import org.apache.ibatis.annotations.Param;
import vn.dntu.qlph.model.DetailRoomVO;
import vn.dntu.qlph.model.RoomVO;

public interface RoomService {
    void insertRoom(RoomVO roomVO);

    void insertMember(DetailRoomVO detailRoomVO);
}
