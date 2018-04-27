package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.RoomVO;
import vn.dntu.qlph.model.UserVO;
import vn.dntu.qlph.service.impl.RoomImpl;
import vn.dntu.qlph.service.impl.UserImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class RoomController {

    @Autowired
    RoomImpl roomImpl;

    @RequestMapping(value = "/insertRoom.do")
    @ResponseBody
    public int insertRoom(@RequestParam("idPhong") int idPhong,@RequestParam("idDmPhong") int idDmPhong, @RequestParam("gioBatDau") String gioBatDau, @RequestParam("gioKetThuc") String gioKetThuc, @RequestParam("ngay") String ngay, @RequestParam("soNguoi") int soNguoi, @RequestParam("mucDich") String mucDich, @RequestParam("nguoiDaiDien") int nguoiDaiDien) {
        try {
            roomImpl.insertRoom(idPhong,idDmPhong, gioBatDau, gioKetThuc, ngay, soNguoi, mucDich, nguoiDaiDien);
            RoomVO roomVO = new RoomVO();
            return roomVO.getIdPhong();
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
    }
}
