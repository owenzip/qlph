package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.UserVO;
import vn.dntu.qlph.service.impl.LoginImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController {

    @Autowired
    LoginImpl loginImpl;

    @RequestMapping(value = "/checkLogin.do")
    @ResponseBody
    public boolean checkLogins(@RequestParam("mssv") String mssv, @RequestParam("matKhau") String matKhau,HttpServletRequest request) {
        try {
            UserVO loginVO = loginImpl.checkLogin(mssv, matKhau);
            if (loginVO != null) {
                HttpSession session = request.getSession();
                session.setAttribute("IDNGUOIDUNG",loginVO.getIdNguoiDung());
                session.setAttribute("MSSV",loginVO.getMssv());
                session.setAttribute("MATKHAU",loginVO.getMatKhau());
                session.setAttribute("TEN",loginVO.getTenNguoiDung());
                session.setAttribute("NGANH",loginVO.getNganh());
                session.setAttribute("LOP",loginVO.getLop());
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}
