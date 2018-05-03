package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.UserVO;
import vn.dntu.qlph.service.impl.UserImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class UserController {

    @Autowired
    UserImpl userImpl;

    @RequestMapping(value = "/checkLogins.do")
    @ResponseBody
    public boolean checkLogins(@RequestParam("mssv") String mssv, @RequestParam("matKhau") String matKhau,HttpServletRequest request) {
        try {
            UserVO userVO = userImpl.checkLogin(mssv, matKhau);
            if (userVO != null) {
                HttpSession session = request.getSession();
                session.setAttribute("IDNGUOIDUNG",userVO.getIdNguoiDung());
                session.setAttribute("MSSV",userVO.getMssv());
                session.setAttribute("MATKHAU",userVO.getMatKhau());
                session.setAttribute("TENNGUOIDUNG",userVO.getTenNguoiDung());
                session.setAttribute("NGANH",userVO.getNganh());
                session.setAttribute("LOP",userVO.getLop());
                session.setAttribute("QUYEN",userVO.getQuyen());
                return true;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @RequestMapping(value = "/changePassword.do")
    @ResponseBody
    public boolean changePassword(@RequestParam("matKhau") String matKhau,@RequestParam("idNguoiDung") int idNguoiDung) {
        try {
            this.userImpl.changePassword(matKhau,idNguoiDung);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
