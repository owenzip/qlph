package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.DetailRoomVO;
import vn.dntu.qlph.model.RoomVO;
import vn.dntu.qlph.model.UserVO;
import vn.dntu.qlph.service.impl.RoomImpl;
import vn.dntu.qlph.service.impl.UserImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class RoomController {

    @Autowired
    RoomImpl roomImpl;

    @RequestMapping(value = "/insertRoom.do")
    @ResponseBody
    public RoomVO insertRoom(@ModelAttribute final RoomVO roomVO) {
        try {
            roomImpl.insertRoom(roomVO);
            if (roomVO.getDetailRoomVO() != null) {
                roomVO.getDetailRoomVO().forEach(item -> {
                    item.setIdPhong(roomVO.getIdPhong());
                    roomImpl.insertMember(item);
                });
            }
            return roomVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
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
}
