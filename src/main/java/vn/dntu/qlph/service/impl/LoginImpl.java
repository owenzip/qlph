package vn.dntu.qlph.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.model.LoginVO;
import vn.dntu.qlph.service.LoginService;

@Service("LoginImpl")
public class LoginImpl implements LoginService {

    @Autowired
    LoginService loginService;

    public LoginVO checkLogin(String tenTaiKhoan, String matKhau) {
        return this.loginService.checkLogin(tenTaiKhoan, matKhau);
    }
}
