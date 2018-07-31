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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.ReportVO;
import vn.dntu.qlph.model.RoomVO;
import vn.dntu.qlph.service.impl.ReportImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class ReportController {

    @Autowired
    ReportImpl reportImpl;

    @RequestMapping(value = "/selectReportToday.do")
    @ResponseBody
    public List<ReportVO> insertRoom() {
        try {
            return reportImpl.selectReportToday();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}