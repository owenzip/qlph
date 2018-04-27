package vn.dntu.qlph.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.model.RoomVO;
import vn.dntu.qlph.model.UserVO;
import vn.dntu.qlph.service.RoomService;
import vn.dntu.qlph.service.UserService;

@Service("RoomImpl")
public class RoomImpl implements RoomService {

    @Autowired
    RoomService roomService;

    @Override
    public void insertRoom(int idPhong,int idDmPhong, String gioBatDau, String gioKetThuc, String ngay, int soNguoi, String mucDich, int nguoiDaiDien) {
        roomService.insertRoom(idPhong,idDmPhong, gioBatDau, gioKetThuc, ngay, soNguoi, mucDich, nguoiDaiDien);
    }
}
