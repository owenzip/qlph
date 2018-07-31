/**
 * @DNTU-LIBRARY application
 * @author Nhựt Nguyễn
 * @since 15/04/2018
 */
package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import vn.dntu.qlph.model.ReportVO;
import vn.dntu.qlph.service.impl.ReportImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ReportController {

    @Autowired
    ReportImpl reportImpl;

    @RequestMapping(value = "/selectReportToday.do")
    @ResponseBody
    public List<ReportVO> selectReportToday(@RequestParam("ngayBatDau") String ngayBatDau, @RequestParam("ngayKetThuc") String ngayKetThuc) {
        try {
            return reportImpl.selectReportToday(ngayBatDau, ngayKetThuc);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/selectReportRoom.do")
    @ResponseBody
    public List<ReportVO> selectReportRoom(@RequestParam("idDmPhong") int idDmPhong, @RequestParam("ngayBatDau") String ngayBatDau, @RequestParam("ngayKetThuc") String ngayKetThuc) {
        try {
            return reportImpl.selectReportRoom(idDmPhong ,ngayBatDau, ngayKetThuc);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/selectReportRoomDetail.do")
    @ResponseBody
    public List<ReportVO> selectReportRoomDetail(@RequestParam("idDmPhong") int idDmPhong, @RequestParam("ngayBatDau") String ngayBatDau, @RequestParam("ngayKetThuc") String ngayKetThuc) {
        try {
            return reportImpl.selectReportRoomDetail(idDmPhong ,ngayBatDau, ngayKetThuc);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/selectReportRoomDetailAll.do")
    @ResponseBody
    public List<ReportVO> selectReportRoomDetailAll(@RequestParam("ngayBatDau") String ngayBatDau, @RequestParam("ngayKetThuc") String ngayKetThuc) {
        try {
            return reportImpl.selectReportRoomDetailAll(ngayBatDau, ngayKetThuc);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}