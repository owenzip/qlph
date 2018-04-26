package vn.dntu.qlph.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import vn.dntu.qlph.model.UserVO;
import vn.dntu.qlph.service.impl.LoginImpl;

@Controller
public class LoginController {

    @Autowired
    LoginImpl loginImpl;

    @RequestMapping(value = "/checkLogin.do")
    @ResponseBody
    public UserVO checkLogins(@RequestParam("mssv") String mssv, @RequestParam("matKhau") String matKhau) {
        try {
            UserVO loginVO = loginImpl.checkLogin(mssv, matKhau);
            return loginVO;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
