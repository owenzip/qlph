package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.LoginVO;
import vn.dntu.qlph.service.impl.LoginImpl;

@Controller
public class LoginController {

    @Autowired
    LoginImpl loginImpl;

    @RequestMapping(value = "/checkLogin.do")
    @ResponseBody
    public LoginVO checkLogins(@RequestParam("tenTaiKhoan") String tenTaiKhoan, @RequestParam("matKhau") String matKhau) {
        try {
            LoginVO loginVO = loginImpl.checkLogin(tenTaiKhoan, matKhau);
            return loginVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
