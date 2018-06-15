/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.model.DetailRoomVO;
import vn.dntu.qlph.model.RoomVO;
import vn.dntu.qlph.service.RoomService;

import java.util.List;

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

    @Override
    public List<RoomVO> selectRoomToDay(int idDmPhong) {
        return roomService.selectRoomToDay(idDmPhong);
    }

    @Override
    public List<RoomVO> selectRoomById(int nguoiDaiDien) {
        return roomService.selectRoomById(nguoiDaiDien);
    }

    @Override
    public List<DetailRoomVO> selectMembersByRoom(int idPhong) {
        return roomService.selectMembersByRoom(idPhong);
    }

    @Override
    public void deleteRoom(int idPhong) {
        roomService.deleteRoom(idPhong);
    }

    @Override
    public void updateStatus(int idPhong, int trangThai) {
        roomService.updateStatus(idPhong,trangThai);
    }

    @Override
    public List<RoomVO> selectAllRoom(String trangThai) {
        return roomService.selectAllRoom(trangThai);
    }

    @Override
    public List<RoomVO> checkRoomExists(String ngay, String gioBatDau, String gioKetThuc, int idDmPhong) {
        return roomService.checkRoomExists(ngay, gioBatDau, gioKetThuc, idDmPhong);
    }
}
