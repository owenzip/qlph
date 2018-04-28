package vn.dntu.qlph.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.model.DetailRoomVO;
import vn.dntu.qlph.model.RoomVO;
import vn.dntu.qlph.model.UserVO;
import vn.dntu.qlph.service.RoomService;
import vn.dntu.qlph.service.UserService;

@Service("RoomImpl")
public class RoomImpl implements RoomService {

    @Autowired
    RoomService roomService;

    @Override
    public void insertRoom(RoomVO roomVO) {
        roomService.insertRoom(roomVO);
    }

    @Override
    public void insertMember(DetailRoomVO detailRoomVO) {
        roomService.insertMember(detailRoomVO);
    }
}
