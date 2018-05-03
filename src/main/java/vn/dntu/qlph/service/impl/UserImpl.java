package vn.dntu.qlph.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.dntu.qlph.model.UserVO;
import vn.dntu.qlph.service.UserService;

@Service("UserImpl")
public class UserImpl implements UserService {

    @Autowired
    UserService userService;

    @Override
    public UserVO checkLogin(String mssv, String matKhau) {
        return this.userService.checkLogin(mssv, matKhau);
    }

    @Override
    public void changePassword(String matKhau, int idNguoiDung) {
        this.userService.changePassword(matKhau,idNguoiDung);
    }
}
