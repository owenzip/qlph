/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.DetailRoomVO;
import vn.dntu.qlph.model.RoomVO;
import vn.dntu.qlph.service.impl.RoomImpl;

import java.util.List;

@Controller
public class RoomController {

    @Autowired
    RoomImpl roomImpl;

    @RequestMapping(value = "/insertRoom.do")
    @ResponseBody
    public boolean insertRoom(@ModelAttribute final RoomVO roomVO) {
        try {
            roomImpl.insertRoom(roomVO);
            if (roomVO.getDetailRoomVO() != null) {
                roomVO.getDetailRoomVO().forEach(item -> {
                    item.setIdPhong(roomVO.getIdPhong());
                    roomImpl.insertMember(item);
                });
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @RequestMapping(value = "/selectRoomToDay.do")
    @ResponseBody
    public List<RoomVO> selectRoomToDay(@RequestParam("idDmPhong") int idDmPhong) {
        try {
            return roomImpl.selectRoomToDay(idDmPhong);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/selectRoomById.do")
    @ResponseBody
    public List<RoomVO> selectMember(@RequestParam("nguoiDaiDien") int nguoiDaiDien) {
        try {
            return roomImpl.selectRoomById(nguoiDaiDien);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/selectMembersByRoom.do")
    @ResponseBody
    public List<DetailRoomVO> selectMembersByRoom(@RequestParam("idPhong") int idPhong) {
        try {
            return roomImpl.selectMembersByRoom(idPhong);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/deleteRoom.do")
    @ResponseBody
    public boolean deleteRoom(@RequestParam("idPhong") int idPhong) {
        try {
            roomImpl.deleteRoom(idPhong);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @RequestMapping(value = "/updateStatus.do")
    @ResponseBody
    public boolean updateStatus(@RequestParam("idPhong") int idPhong, @RequestParam("trangThai") int trangThai) {
        try {
            roomImpl.updateStatus(idPhong, trangThai);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @RequestMapping(value = "/selectAllRoom.do")
    @ResponseBody
    public List<RoomVO> selectAllRoom(@RequestParam("trangThai") String trangThai) {
        try {
            List<RoomVO> roomVO = roomImpl.selectAllRoom(trangThai);
            return roomVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/checkRoomExists.do")
    @ResponseBody
    public List<RoomVO> checkRoomExists(@RequestParam("ngay") String ngay,@RequestParam("gioBatDau") String gioBatDau,@RequestParam("gioKetThuc") String gioKetThuc, @RequestParam("idDmPhong") int idDmPhong) {
        try {
            List<RoomVO> roomVO = roomImpl.checkRoomExists(ngay, gioBatDau, gioKetThuc, idDmPhong);
            return roomVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
