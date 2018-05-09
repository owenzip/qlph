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
}
